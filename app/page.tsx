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
    teams: [
      "Portugal",
      "Belgium",
      "Algeria OUT",
      "Iran OUT",
      "New Zealand OUT",
      "Iraq OUT",
    ],
  },
  {
    name: "Cris",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/cris-gamified.png",
    teams: [
      "England",
      "Mexico",
      "USA",
      "South Korea OUT",
      "DR Congo OUT",
      "Haiti OUT",
    ],
  },
  {
    name: "Marcy",
    profile: "Bogota",
    teams: [
      "Argentina",
      "Germany OUT",
      "Ivory Coast OUT",
      "South Africa OUT",
      "Australia OUT",
      "Saudi Arabia OUT",
    ],
  },
  {
    name: "Ben",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/ben-manu.jpeg",
    teams: [
      "Brazil",
      "Colombia",
      "Austria OUT",
      "Panama OUT",
      "Paraguay OUT",
      "Cape Verde OUT",
    ],
  },
  {
    name: "Sandrine",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/sandrine-gamified.png",
    teams: [
      "Netherlands OUT",
      "Turkey OUT",
      "Canada OUT",
      "Czechia OUT",
      "Uzbekistan OUT",
      "Bosnia and Herzegovina OUT",
    ],
  },
  {
    name: "Mum",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/mum-gamified.png",
    teams: [
      "France",
      "Croatia OUT",
      "Ecuador OUT",
      "Norway",
      "Scotland OUT",
      "Curacao OUT",
    ],
  },
  {
    name: "Dad",
    profile: "Santiago",
    teams: [
      "Morocco",
      "Uruguay OUT",
      "Switzerland",
      "Egypt",
      "Qatar OUT",
      "Jordan OUT",
    ],
  },
  {
    name: "Leonie",
    profile:
      "https://demo-bucket-molly.s3.eu-west-2.amazonaws.com/leonie-gamified.png",
    teams: [
      "Spain",
      "Senegal OUT",
      "Japan OUT",
      "Sweden OUT",
      "Tunisia OUT",
      "Ghana OUT",
    ],
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
                          className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                            team.includes("OUT")
                              ? "bg-secondary text-text-light"
                              : "bg-accent text-foreground"
                          }`}
                        >
                          {team}
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2">
                      {rightColumn.map((team) => (
                        <li
                          key={team}
                          className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                            team.includes("OUT")
                              ? "bg-secondary text-text-light"
                              : "bg-accent text-foreground"
                          }`}
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
