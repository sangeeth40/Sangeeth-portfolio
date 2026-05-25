import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTilt } from "@/hooks/useTilt";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface Stat {
  value: number;
  label: string;
  suffix: string;
  colorClass: string;
}

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="text-center p-5 rounded-2xl bg-slate-800/50 hover:bg-slate-800/80 transition-colors duration-300">
      <div className={`text-4xl font-bold tabular-nums ${stat.colorClass}`}>
        {stat.value}
        {stat.suffix}
      </div>
      <div className="text-sm text-slate-400 mt-1.5">{stat.label}</div>
    </div>
  );
}

export function AboutSection() {
  const { ref: sectionRef, visible } = useScrollReveal(0.15);
  const { ref: cardRef, style: cardTilt } = useTilt(10);

  const projects = useAnimatedCounter(2, visible);
  const years = useAnimatedCounter(1, visible);
  const tech = useAnimatedCounter(10, visible);
  const papers = useAnimatedCounter(1, visible);

  const stats: Stat[] = [
    {
      value: projects,
      label: "Projects Completed",
      suffix: "+",
      colorClass: "text-indigo-400",
    },
    {
      value: years,
      label: "Years Experience",
      suffix: "+",
      colorClass: "text-purple-400",
    },
    {
      value: tech,
      label: "Technologies",
      suffix: "+",
      colorClass: "text-cyan-400",
    },
    {
      value: papers,
      label: "Research Papers",
      suffix: "",
      colorClass: "text-pink-400",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={sectionRef}
          className={`grid md:grid-cols-2 gap-16 items-center reveal-hidden ${visible ? "reveal-visible" : ""}`}
        >
          {/* Bio text */}
          <div>
            <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">
              About Me
            </h2>
            <h3 className="text-4xl font-bold text-white mb-6">
              Building Intelligent Systems
            </h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a passionate Full-Stack and AI Engineer with hands-on
                experience building and deploying end-to-end LLM-powered
                applications. My expertise spans RAG pipelines, agent-based
                systems using LangChain and modern AI models.
              </p>
              <p>
                With experience in Dockerized deployments on AWS (ECS, Fargate)
                and working with vector databases for scalable AI solutions, I
                deliver real-world projects in both industry and research
                settings.
              </p>
              <p>
                Actively seeking new opportunities to build practical,
                high-impact AI products that solve real problems.
              </p>
            </div>
          </div>

          {/* Stats card with 3-D tilt */}
          <div ref={cardRef} style={cardTilt}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-slate-700/50 backdrop-blur-xl glow-hover">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <StatCard key={i} stat={stat} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
