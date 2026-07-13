import type { Metadata } from "next";
import ArticleLayout, { H2, P, Pull, Strong } from "@/components/ArticleLayout";
import CtaBand from "@/components/CtaBand";
import Squiggle from "@/components/Squiggle";

export const metadata: Metadata = {
  title: "The Unglamorous Foundation: Why Data Engineering Decides Whether Your AI Project Succeeds · Cymrai",
  description:
    "Every conversation about AI focuses on the model. What rarely gets talked about is the infrastructure those models depend on, and what happens when it is built badly.",
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        category="Data Engineering"
        date="7 May 2026"
        read="7 min read"
        title="The Unglamorous Foundation: Why Data Engineering Decides Whether Your AI Project Succeeds"
        intro="Every conversation about AI focuses on the model. What rarely gets talked about is the infrastructure those models depend on, and what happens when it is built badly."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Analytics dashboard on a laptop screen"
      >
        <P>
          There is a version of the AI conversation that happens on stage at conferences, and a version that
          happens at 2am when a pipeline has silently dropped a week of transactions and the finance dashboard
          has been wrong for five days. The first version is about models. The second is about plumbing, and
          the plumbing is where AI projects live or die.
        </P>

        <H2>Your model is a consumer, not a product</H2>
        <P>
          A machine learning model is best understood as the last consumer in a long supply chain. Data is
          captured by operational systems, moved, cleaned, joined, aggregated and finally served to the model.
          Every stage of that chain is a place where quality can degrade, and the model has no way of knowing.
          It will make confident predictions on garbage with exactly the same tone as it makes them on truth.
        </P>
        <P>
          This is why &ldquo;our model isn&apos;t accurate enough&rdquo; is so often a misdiagnosis. The model
          is fine. The join that feeds it has been duplicating rows since the last CRM migration.
        </P>
        <Pull>
          A model has no way of knowing its inputs are wrong. It makes confident predictions on garbage with
          the same tone as it makes them on truth.
        </Pull>

        <H2>What bad foundations cost, concretely</H2>
        <P>
          The costs of weak data infrastructure rarely show up as one dramatic failure. They show up as a tax
          on everything. Analysts spend most of their week reconciling numbers between systems instead of
          analysing anything. Reports take days because someone has to assemble them by hand. Every new
          project starts with the same three months of untangling the same data, because nothing was fixed
          permanently last time.
        </P>
        <P>
          Then there is the trust cost, which is worse. The first time a leadership team catches a dashboard
          being wrong, every dashboard becomes suspect. People go back to their private spreadsheets, and the
          organisation is now paying for infrastructure nobody believes.
        </P>

        <H2>What good looks like</H2>
        <P>
          Good data engineering is not a particular tool or vendor. It is a set of properties. Data arrives
          reliably, on a schedule people can depend on. Failures are loud: when a pipeline breaks, someone is
          alerted within minutes, not discovered by a confused user within weeks. Definitions are shared, so
          &ldquo;monthly active customer&rdquo; means one thing everywhere. Lineage is traceable, so when a
          number looks wrong you can walk backwards to the source instead of guessing.
        </P>
        <P>
          Notice that none of these properties mention AI. That is the point. <Strong>The same foundation
          that makes AI possible makes ordinary reporting trustworthy</Strong>, which is why data engineering
          pays for itself even if a model never gets built on top of it.
        </P>

        <H2>The order of operations matters</H2>
        <P>
          When organisations come to us wanting to &ldquo;add AI&rdquo;, the first thing we look at is the
          state of the data underneath. Sometimes it is ready and we can move straight to the
          interesting work. More often there is a gap, and the honest advice is to close it first: stabilise
          the pipelines, fix the definitions, get the warehouse into a state where a model would be fed
          properly.
        </P>
        <P>
          This is not the exciting answer, and occasionally it costs us a project when someone else promises
          to skip the boring part. But we have never once seen the boring part skipped successfully. The
          foundation gets built either way. The only choice is whether it gets built deliberately at the
          start, or expensively in the middle, after the model has already failed once.
        </P>
      </ArticleLayout>

      <CtaBand
        heading={<>Not sure if your data is <Squiggle>ready</Squiggle>?</>}
        text="A short readiness assessment will tell you exactly where you stand before you commit to a build. No sales pitch, just an engineering answer."
      />
    </>
  );
}
