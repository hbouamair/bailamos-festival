"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

type EventType = "WORKSHOP" | "SPECIAL" | "COMPETITION" | "REHEARSAL" | "SHOW" | "SOCIAL" | "REGISTRATION";

interface ScheduleEvent {
  id: string;
  start: string; // "11:00"
  end: string;   // "19:00"
  track: "A" | "B" | "C" | "K" | "HALL";
  type: EventType;
  title: string;
  description?: string;
}

interface DaySchedule {
  day: number;
  date: string; // "June 12"
  weekday: string; // "Thursday"
  shortDate: string; // "JUN 12"
  events: ScheduleEvent[];
}

const EVENT_TYPE_STYLES: Record<EventType, { label: string; borderColor: string; bgColor: string }> = {
  WORKSHOP: { label: "WORKSHOP", borderColor: "border-l-green-500", bgColor: "bg-green-500/10" },
  SPECIAL: { label: "SPECIAL EVENT", borderColor: "border-l-orange-500", bgColor: "bg-orange-500/10" },
  COMPETITION: { label: "COMPETITION", borderColor: "border-l-cyan-400", bgColor: "bg-cyan-400/10" },
  REHEARSAL: { label: "REHEARSAL", borderColor: "border-l-zinc-500", bgColor: "bg-zinc-500/10" },
  SHOW: { label: "SHOW", borderColor: "border-l-red-500", bgColor: "bg-red-500/10" },
  SOCIAL: { label: "SOCIAL DANCING", borderColor: "border-l-purple-500", bgColor: "bg-purple-500/10" },
  REGISTRATION: { label: "REGISTRATION", borderColor: "border-l-yellow-500", bgColor: "bg-yellow-500/10" },
};

const TRACKS: { id: "A" | "B" | "C" | "K" | "HALL"; label: string }[] = [
  { id: "A", label: "A" },
  { id: "B", label: "B" },
  { id: "C", label: "C" },
  { id: "K", label: "K" },
  { id: "HALL", label: "Hall" },
];

const ROW_HEIGHT = 30;

/** Half-hour slot index from midnight; next day 00:00 = 48, 01:00 = 50, etc. */
function timeToSlot(time: string): number {
  const [h, m] = time.split(":").map(Number);
  const hours = h >= 2 ? h : h + 24; // same-day 02:00–23:59; 00:00, 01:00 = next day
  return hours * 2 + (m === 30 ? 1 : 0);
}

/** Grid bounds from a day's events: start at first event, end at last (rounded to hour). Max 16h to keep grid compact. */
function getGridBounds(events: ScheduleEvent[]): { startSlot: number; endSlot: number; rows: number } {
  if (events.length === 0) return { startSlot: 0, endSlot: 24, rows: 24 }; // 12h default
  let minSlot = timeToSlot(events[0].start);
  let maxSlot = timeToSlot(events[0].end);
  for (const e of events) {
    minSlot = Math.min(minSlot, timeToSlot(e.start));
    maxSlot = Math.max(maxSlot, timeToSlot(e.end));
  }
  const startSlot = Math.floor(minSlot / 2) * 2; // round down to full hour
  let endSlot = Math.ceil(maxSlot / 2) * 2;
  const maxRows = 32; // ~16 hours max
  if (endSlot - startSlot > maxRows) endSlot = startSlot + maxRows;
  const rows = Math.max(2, endSlot - startSlot);
  return { startSlot, endSlot, rows };
}

function timeToRow(time: string, startSlot: number): number {
  return timeToSlot(time) - startSlot;
}

function parseDuration(start: string, end: string, startSlot: number): number {
  const endRow = timeToRow(end, startSlot);
  const startRow = timeToRow(start, startSlot);
  return Math.max(1, endRow - startRow);
}

const SCHEDULE: DaySchedule[] = [
  {
    day: 1,
    date: "June 12",
    weekday: "Thursday",
    shortDate: "JUN 12",
    events: [
      { id: "d1-1", start: "18:00", end: "20:00", track: "HALL", type: "REGISTRATION", title: "Registration & welcome" },
      { id: "d1-2", start: "20:00", end: "02:00", track: "HALL", type: "SOCIAL", title: "Opening party & night social", description: "Kick off the festival on the main floor" },
    ],
  },
  {
    day: 2,
    date: "June 13",
    weekday: "Friday",
    shortDate: "JUN 13",
    events: [
      { id: "d2-1a", start: "11:00", end: "13:00", track: "A", type: "WORKSHOP", title: "Workshops", description: "Levels for everyone" },
      { id: "d2-1b", start: "13:00", end: "15:00", track: "A", type: "WORKSHOP", title: "Workshops", description: "Levels for everyone" },
      { id: "d2-1c", start: "15:00", end: "17:00", track: "A", type: "WORKSHOP", title: "Workshops", description: "Levels for everyone" },
      { id: "d2-1d", start: "17:00", end: "19:00", track: "A", type: "WORKSHOP", title: "Workshops", description: "Levels for everyone" },
      { id: "d2-2a", start: "11:00", end: "13:00", track: "B", type: "WORKSHOP", title: "Workshops", description: "Levels for everyone" },
      { id: "d2-2b", start: "13:00", end: "15:00", track: "B", type: "WORKSHOP", title: "Workshops", description: "Levels for everyone" },
      { id: "d2-2c", start: "15:00", end: "19:00", track: "B", type: "WORKSHOP", title: "Workshops", description: "Afternoon block" },
      { id: "d2-3", start: "11:00", end: "14:00", track: "C", type: "WORKSHOP", title: "Workshops", description: "Morning block" },
      { id: "d2-4", start: "11:00", end: "13:00", track: "K", type: "SPECIAL", title: "Yoga & Pilates", description: "Start the day with movement" },
      { id: "d2-5", start: "13:00", end: "15:00", track: "K", type: "SPECIAL", title: "Master class", description: "For certified dancers" },
      { id: "d2-6", start: "15:00", end: "19:00", track: "C", type: "COMPETITION", title: "Marrakech Qualifier", description: "Last chance to qualify for finals" },
      { id: "d2-7", start: "14:00", end: "19:00", track: "HALL", type: "SOCIAL", title: "Day social", description: "Open floor" },
      { id: "d2-8", start: "19:00", end: "21:00", track: "HALL", type: "REHEARSAL", title: "Show rehearsals" },
      { id: "d2-9", start: "22:00", end: "23:30", track: "HALL", type: "SHOW", title: "Shows of the night" },
      { id: "d2-10", start: "00:00", end: "07:00", track: "HALL", type: "SOCIAL", title: "Night social", description: "Until sunrise" },
    ],
  },
  {
    day: 3,
    date: "June 14",
    weekday: "Saturday",
    shortDate: "JUN 14",
    events: [
      { id: "d3-1a", start: "11:00", end: "13:00", track: "A", type: "WORKSHOP", title: "Workshops" },
      { id: "d3-1b", start: "13:00", end: "15:00", track: "A", type: "WORKSHOP", title: "Workshops" },
      { id: "d3-1c", start: "15:00", end: "17:00", track: "A", type: "WORKSHOP", title: "Workshops" },
      { id: "d3-1d", start: "17:00", end: "19:00", track: "A", type: "WORKSHOP", title: "Workshops" },
      { id: "d3-2a", start: "11:00", end: "13:00", track: "B", type: "WORKSHOP", title: "Workshops" },
      { id: "d3-2b", start: "13:00", end: "15:00", track: "B", type: "WORKSHOP", title: "Workshops" },
      { id: "d3-2c", start: "15:00", end: "19:00", track: "B", type: "WORKSHOP", title: "Workshops", description: "Afternoon block" },
      { id: "d3-3", start: "11:00", end: "14:00", track: "C", type: "WORKSHOP", title: "Workshops" },
      { id: "d3-4", start: "14:00", end: "19:00", track: "HALL", type: "SOCIAL", title: "Day social" },
      { id: "d3-5", start: "19:00", end: "21:00", track: "HALL", type: "REHEARSAL", title: "Gala rehearsals" },
      { id: "d3-6", start: "21:00", end: "23:30", track: "HALL", type: "SHOW", title: "Gala show", description: "Main stage performances" },
      { id: "d3-7", start: "00:00", end: "07:00", track: "HALL", type: "SOCIAL", title: "Night social" },
    ],
  },
  {
    day: 4,
    date: "June 15",
    weekday: "Sunday",
    shortDate: "JUN 15",
    events: [
      { id: "d4-1", start: "10:00", end: "14:00", track: "A", type: "WORKSHOP", title: "Morning workshops" },
      { id: "d4-2", start: "10:00", end: "14:00", track: "B", type: "WORKSHOP", title: "Morning workshops" },
      { id: "d4-3", start: "14:00", end: "20:00", track: "HALL", type: "SOCIAL", title: "Closing party & farewell", description: "One last dance together" },
    ],
  },
];

export function Schedule({ showHeading = true }: { showHeading?: boolean }) {
  const [selectedDay, setSelectedDay] = useState(1);
  const daySchedule = useMemo(() => SCHEDULE.find((d) => d.day === selectedDay) ?? SCHEDULE[0], [selectedDay]);
  const gridBounds = useMemo(() => getGridBounds(daySchedule.events), [daySchedule.events]);
  const { startSlot, rows: ROWS } = gridBounds;
  const trackCol = (track: "A" | "B" | "C" | "K" | "HALL") => TRACKS.findIndex((t) => t.id === track) + 3; // +3: skip time col and divider

  return (
    <section
      id="schedule"
      className="relative py-16 sm:py-20 scroll-mt-20"
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {showHeading && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow mb-4">Program</p>
          <h2 id="schedule-heading" className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Festival schedule
          </h2>
          <p className="mt-4 text-muted text-lg">
            Four days of workshops, shows, and social dancing. Select a day below.
          </p>
        </div>
        )}

        {/* Day selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {SCHEDULE.map((d) => (
            <button
              key={d.day}
              type="button"
              onClick={() => setSelectedDay(d.day)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow ${
                selectedDay === d.day
                  ? "bg-yellow text-background"
                  : "bg-white/[0.06] text-muted hover:bg-white/[0.1] hover:text-white border border-white/[0.08]"
              }`}
            >
              Day {d.day}
            </button>
          ))}
        </div>

        {/* Day title - match reference: "Day 2" then "Friday - JUN 13" */}
        <div className="mb-6">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Day {daySchedule.day}
          </h3>
          <p className="text-muted mt-0.5">
            {daySchedule.weekday} – {daySchedule.shortDate}
          </p>
        </div>

        {/* Schedule grid - horizontal scroll on small screens so timeline stays readable */}
        <div className="rounded-2xl border border-white/[0.12] bg-surface-1/80 overflow-hidden">
          <div className="overflow-x-auto -mx-px" style={{ minHeight: 320 }}>
            <div
              className="grid gap-px bg-white/[0.08] min-w-[600px]"
              style={{
                gridTemplateColumns: `80px 1px repeat(${TRACKS.length}, minmax(100px, 1fr))`,
                gridTemplateRows: `auto repeat(${ROWS}, ${ROW_HEIGHT}px)`,
              }}
            >
            {/* Header row: time column header + divider + track labels */}
            <div className="col-span-1 bg-[#0d0d10] p-3 border-r-2 border-white/25" />
            <div className="col-span-1 bg-white/20" aria-hidden />
            {TRACKS.map((t) => (
              <div
                key={t.id}
                className="bg-surface-2/90 p-3 text-center text-xs font-bold uppercase tracking-wider text-muted"
              >
                {t.label}
              </div>
            ))}

            {/* Time column: dark background + strong border so hours stay visible next to green */}
            {Array.from({ length: ROWS }).map((_, i) => {
              const slot = startSlot + i;
              const hour = Math.floor(slot / 2);
              const displayHour = hour >= 24 ? hour - 24 : hour;
              const min = (slot % 2) * 30;
              const timeLabel = `${String(displayHour).padStart(2, "0")}:${min === 0 ? "00" : "30"}`;
              return (
                <div
                  key={i}
                  className="bg-[#0d0d10] border-r-2 border-white/25 p-2 pr-3 text-right text-xs font-mono font-medium text-white/90 tabular-nums"
                  style={{
                    gridColumn: 1,
                    gridRow: i + 2,
                    minHeight: ROW_HEIGHT,
                  }}
                >
                  {min === 0 ? timeLabel : ""}
                </div>
              );
            })}
            {/* Divider column cells between time and track A */}
            {Array.from({ length: ROWS }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20"
                style={{ gridColumn: 2, gridRow: i + 2, minHeight: ROW_HEIGHT }}
                aria-hidden
              />
            ))}

            {/* Event cards - match reference: type uppercase, clock + time, duration (Xh) top right, title, description */}
            {daySchedule.events.map((event) => {
              const rowStart = timeToRow(event.start, startSlot) + 2;
              const rawSpan = parseDuration(event.start, event.end, startSlot);
              const span = Math.min(rawSpan, ROWS - (rowStart - 2));
              const col = trackCol(event.track);
              const style = EVENT_TYPE_STYLES[event.type];
              const durationMin = span * 30;
              const durationStr = durationMin >= 60 ? `(${durationMin / 60}h)` : `(${durationMin}m)`;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`rounded-xl border-l-4 ${style.borderColor} ${style.bgColor} border border-white/[0.08] p-3 overflow-hidden flex flex-col min-h-0`}
                  style={{
                    gridColumn: col,
                    gridRow: `${rowStart} / span ${span}`,
                    minHeight: span * ROW_HEIGHT - 4,
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted shrink-0">
                      {style.label}
                    </span>
                    {span >= 2 && (
                      <span className="text-[10px] font-mono text-muted shrink-0">{durationStr}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-[10px] font-mono text-muted">
                    <ClockIcon className="w-3 h-3 shrink-0 opacity-70" />
                    <span>{event.start} – {event.end}</span>
                  </div>
                  <span className="font-display font-semibold text-white text-sm mt-1.5 line-clamp-2">
                    {event.title}
                  </span>
                  {event.description && (
                    <span className="text-xs text-muted mt-0.5 line-clamp-2">{event.description}</span>
                  )}
                </motion.div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Other activities - horizontal row of cards */}
        <div className="mt-10">
          <h4 className="font-display text-xl font-bold text-white mb-1">Other activities</h4>
          <p className="text-muted text-sm mb-5">
            Additional events and experiences during the festival.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-2 -mx-1">
            {["Artist meet & greet", "Photo booth & memories", "Festival market"].map((title) => (
              <div
                key={title}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 min-w-[200px] shrink-0"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-yellow">
                  Activity
                </span>
                <p className="font-display font-semibold text-white mt-1">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
