import React from 'react';
import { CloudCog, Container, Database, GitBranch, Server, ShieldCheck } from 'lucide-react';

const layers = [
  {
    icon: Database,
    title: 'API & Backend',
    summary: 'Django + DRF services powering business logic, auth, and secure data flows.',
    chips: ['Django', 'DRF', 'PostgreSQL']
  },
  {
    icon: Container,
    title: 'Containerization',
    summary: 'Application packaging with Docker and Nginx for consistent, repeatable runtime environments.',
    chips: ['Docker', 'Nginx', 'Runtime isolation']
  },
  {
    icon: GitBranch,
    title: 'CI/CD Automation',
    summary: 'GitHub Actions pipelines build, validate, and push production-ready releases automatically.',
    chips: ['GitHub Actions', 'Build', 'Deploy']
  },
  {
    icon: CloudCog,
    title: 'Cloud & IaC',
    summary: 'AWS / Oracle Cloud and Terraform define resilient, versioned infrastructure at scale.',
    chips: ['AWS', 'Oracle Cloud', 'Terraform']
  }
];

const Infrastructure = () => {
  return (
    <section id="infrastructure" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="text-sm font-medium uppercase tracking-[0.22em] text-primary animate-fade-in">Infrastructure Stack</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary-foreground animate-fade-in animation-delay-100">
            Built for <span className="font-serif italic font-normal text-white">reliable delivery.</span>
          </h2>
          <p className="mt-4 text-muted-foreground animate-fade-in animation-delay-200">
            From backend services to cloud deployment, every layer is designed for scalability, observability, and repeatable delivery.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {layers.map(({ icon: Icon, title, summary, chips }, index) => (
            <div key={title} className="stack-card glass rounded-2xl p-5 animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>

              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <span key={chip} className="mono rounded-full border border-border/70 bg-surface/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-2">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Secure by default
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/80 px-3 py-2">
            <Server className="h-3.5 w-3.5 text-primary" />
            Production-focused
          </span>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
