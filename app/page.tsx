type Participant = {
  name: string;
  profile: string;
  teams: [string, string, string, string, string, string];
};

const participants: Participant[] = [
  {
    name: "Israel",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/israel-gamified.png",
    teams: ["Portugal", "Belgium", "Algeria", "Iran", "New Zealand", "Iraq"],
  },
  {
    name: "Cris",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/cris-gamified.png",
    teams: ["England", "Mexico", "USA", "South Korea", "DR Congo", "Haiti"],
  },
  {
    name: "Marcy",
    profile: "Bogota",
    teams: [
      "Argentina",
      "Germany",
      "Ivory Coast",
      "South Africa",
      "Australia",
      "Saudi Arabia",
    ],
  },
  {
    name: "Ben",
    profile: "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/ben-manu.jpeg",
    teams: [
      "Brazil",
      "Colombia",
      "Austria",
      "Panama",
      "Paraguay",
      "Cape Verde",
    ],
  },
  {
    name: "Sandrine",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/sandrine-gamified.png",
    teams: [
      "Netherlands",
      "Turkey",
      "Canada",
      "Czechia",
      "Uzbekistan",
      "Bosnia and Herzegovina",
    ],
  },
  {
    name: "Mum",
    profile: "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/mum-gamified.png",
    teams: ["France", "Croatia", "Ecuador", "Norway", "Scotland", "Curacao"],
  },
  {
    name: "Dad",
    profile: "Santiago",
    teams: ["Morocco", "Uruguay", "Switzerland", "Egypt", "Qatar", "Jordan"],
  },
  {
    name: "Leonie",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/leonie-gamified.png",
    teams: ["Spain", "Senegal", "Japan", "Sweden", "Tunisia", "Ghana"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            FIFA World Cup Sweepstake
          </p>
        </header>

        <section
          className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 sm:mx-0 sm:px-0"
          aria-label="Participant cards"
        >
          {participants.map((participant, index) => {
            const leftColumn = participant.teams.slice(0, 3);
            const rightColumn = participant.teams.slice(3, 6);

            return (
              <article
                key={participant.name}
                className="w-[280px] shrink-0 snap-center rounded-2xl border border-primary/20 bg-background p-4 shadow-xl sm:w-[320px]"
              >
                <div className="rounded-xl bg-primary p-3 text-text-light dark:bg-primary">
                  <p className="text-xs uppercase tracking-wider text-accent">
                    Player #{index + 1}
                  </p>
                  <h2 className="mt-1 text-xl font-bold leading-tight">
                    {participant.name}
                  </h2>
                  <img
                    src={participant.profile}
                    alt={participant.name}
                    className="mt-3 aspect-square w-full rounded-lg object-cover"
                  />
                </div>

                <div className="mt-4 rounded-xl border border-secondary/30 bg-background p-3">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-secondary">
                    Teams
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <ul className="space-y-2">
                      {leftColumn.map((team) => (
                        <li
                          key={team}
                          className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-foreground"
                        >
                          {team}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {rightColumn.map((team) => (
                        <li
                          key={team}
                          className="rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-text-light"
                        >
                          {team}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
