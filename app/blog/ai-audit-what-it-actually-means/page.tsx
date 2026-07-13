import type { Metadata } from "next";
import ArticleLayout, { H2, P, Pull, Strong } from "@/components/ArticleLayout";
import CtaBand from "@/components/CtaBand";
import Squiggle from "@/components/Squiggle";

export const metadata: Metadata = {
  title: "An AI Audit Isn't a Technical Review. Here's What It Actually Is. · Cymrai",
  description:
    "The term 'AI audit' means different things to different people. Most definitions are too narrow. Here is how we think about it, and why the scope matters more than the methodology.",
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        category="AI Governance"
        date="29 January 2026"
        read="9 min read"
        title="An AI Audit Isn't a Technical Review. Here's What It Actually Is."
        intro="The term 'AI audit' means different things to different people. Most definitions are too narrow. Here is how we think about it, and why the scope matters more than the methodology."
        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200"
        imageAlt="Person reviewing documents at a desk"
      >
        <P>
          When most people hear &ldquo;AI audit&rdquo;, they picture an engineer checking a model&apos;s
          accuracy. That is one useful activity, and it is nowhere near an audit. A model can score
          beautifully on every technical metric while the organisation around it has no idea who owns it, no
          record of why it was approved, no controls on who can change it, and no answer for a regulator who
          asks how it treats different groups of customers.
        </P>
        <P>
          The technical review tells you whether the model works. The audit tells you whether the
          organisation is in control of it. Those are different questions, and the second one is the one
          that ends up in front of boards, insurers and regulators.
        </P>

        <H2>Why the narrow definition fails</H2>
        <P>
          Consider the AI incidents that actually make the news and the case law. Very few are stories about
          a model with poor accuracy. They are stories about systems nobody was monitoring, deployed for
          purposes nobody had signed off, using data nobody had checked the rights to, producing outcomes
          nobody could explain afterwards. Every one of those failures is a governance failure, and a
          technical review would have caught none of them.
        </P>
        <Pull>
          A model can pass every technical test while the organisation around it fails every question that
          matters: who owns this, who approved it, who is watching it, and can anyone explain what it did?
        </Pull>

        <H2>The five domains a real audit covers</H2>
        <P>
          Our audit practice, aligned with ISACA&apos;s frameworks, works across five domains. The first is
          risk: identifying and quantifying model bias, accuracy degradation and adversarial exposure. The
          second is governance: whether accountability, ownership and oversight structures exist and
          function. The third is control: access management, versioning, change management and monitoring in
          production. The fourth is regulatory alignment: UK GDPR, the EU AI Act, FCA rules, NHS requirements
          or whatever applies to your sector. The fifth is the output that makes the other four useful: a
          plain-language report for leadership and a prioritised remediation plan for engineers.
        </P>
        <P>
          The order matters less than the coverage. An audit that skips governance because the auditors were
          all engineers, or skips the technical layer because they were all compliance people, produces a
          document that reassures everyone and protects no one.
        </P>

        <H2>&ldquo;But we only use third-party AI&rdquo;</H2>
        <P>
          This is the most common reason organisations assume audits don&apos;t apply to them, and it is
          wrong in an expensive way. If your team makes decisions with an AI-powered tool, your organisation
          owns the outcomes, regardless of who built the model. Regulators do not accept &ldquo;the vendor
          handles that&rdquo; as an accountability structure, and neither do courts.
        </P>
        <P>
          Auditing bought-in AI looks different from auditing your own build. The emphasis shifts to vendor
          due diligence, contractual controls, data flows and the human oversight wrapped around the tool.
          But the core question is identical: <Strong>can you demonstrate that you are in control of the AI
          making decisions in your name?</Strong>
        </P>

        <H2>What you should have at the end</H2>
        <P>
          A good audit ends with two documents. Leadership gets findings in plain language, rated by
          severity, with a clear statement of what each one means for the business. Engineering gets a
          technical annex with the evidence and a remediation roadmap ordered by priority, so the most
          consequential gaps close first. What nobody gets is a hundred pages of methodology that took
          longer to format than the fieldwork took to do.
        </P>
        <P>
          The best time to do this is before someone else makes you. An audit commissioned by your own board
          is a management tool. The same exercise commissioned by a regulator after an incident is evidence.
          The work is identical. The circumstances are not.
        </P>
      </ArticleLayout>

      <CtaBand
        heading={<>Would your AI survive an <Squiggle>audit</Squiggle>?</>}
        text="If you're not certain, that is the answer. Our independent audit gives you plain-language findings and a prioritised plan, before anyone else asks the question."
      />
    </>
  );
}
