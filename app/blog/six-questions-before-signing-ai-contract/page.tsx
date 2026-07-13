import type { Metadata } from "next";
import ArticleLayout, { H2, P, Pull } from "@/components/ArticleLayout";
import CtaBand from "@/components/CtaBand";
import Squiggle from "@/components/Squiggle";

export const metadata: Metadata = {
  title: "Six Questions to Ask Before You Sign an AI Contract · Cymrai",
  description:
    "AI vendors have learned to be very good at demos. Here is what to ask when the demo is finished and the contract is on the table.",
};

export default function Page() {
  return (
    <>
      <ArticleLayout
        category="AI Strategy"
        date="19 March 2026"
        read="6 min read"
        title="Six Questions to Ask Before You Sign an AI Contract"
        intro="AI vendors have learned to be very good at demos. Here is what to ask when the demo is finished and the contract is on the table."
        image="/images/ai-strategy.jpg"
        imageAlt="A chess king on a circuit board, lit by a neural network"
      >
        <P>
          A polished demo tells you one thing: the vendor can make their product look good under conditions
          they control. That is worth knowing, but it is not the decision you are making. You are deciding
          whether this system will work on your data, inside your operation, at a cost you can predict, for
          years. These six questions are the ones we ask on behalf of clients, and the answers separate real
          products from expensive experiments.
        </P>

        <H2>1. What data was this demo running on?</H2>
        <P>
          If the answer is anything other than &ldquo;yours&rdquo;, ask for a pilot on a sample of your actual
          data before signing anything. Demo datasets are curated to flatter the product. Your invoices, your
          case notes, your sensor logs are not. A vendor confident in their product will agree readily. A
          vendor who resists has told you something important.
        </P>

        <H2>2. What happens when it&apos;s wrong?</H2>
        <P>
          Every AI system is wrong some of the time. The question is whether the product was designed by
          people who accepted that. Ask what the error rate is on data like yours, how errors surface, and
          what the correction workflow looks like. If the vendor talks as though errors don&apos;t happen,
          the system has no plan for them, and your staff will be the plan.
        </P>

        <H2>3. Where does our data go?</H2>
        <P>
          Get specific answers, in writing: where data is processed and stored, whether it is used to train
          the vendor&apos;s models, who can access it, and what happens to it when the contract ends. Under UK
          GDPR you remain accountable for personal data you hand to a processor. &ldquo;It&apos;s all secure&rdquo;
          is not an answer. A data processing agreement with named subprocessors is.
        </P>

        <H2>4. What does this cost at our real volume?</H2>
        <P>
          AI pricing is frequently usage-based, and pilots run at pilot volume. Model the cost at your actual
          throughput, including the growth you are hoping for, before you sign. We have seen per-document
          pricing that looked trivial in a demo become the largest line item in a department&apos;s budget at
          production scale. If the vendor cannot help you build that model, build it yourself before signing.
        </P>

        <H2>5. How do we leave?</H2>
        <P>
          Ask what an exit looks like while you are still friends. Can you export your data, in a usable
          format, including anything the system generated or learned? What notice is required? What does the
          transition period look like? Vendors change strategy, get acquired and shut products down. An exit
          clause you never use costs nothing. The absence of one can cost you the whole dataset.
        </P>

        <H2>6. Who is accountable when it matters?</H2>
        <P>
          If the system makes a decision that affects a customer, a patient or a regulator, who answers for
          it? Ask whether the vendor supports auditing, whether decisions can be explained after the fact,
          and what their own liability position is. Regulated organisations increasingly need to demonstrate
          oversight of AI they use, not just AI they build. A vendor with nothing to say here is a vendor
          you will be defending alone.
        </P>

        <Pull>
          A vendor confident in their product will answer all six questions readily. A vendor who resists
          any of them has answered a seventh question you didn&apos;t ask.
        </Pull>

        <P>
          None of these questions requires technical depth to ask. They require permission to be sceptical
          in a room where everyone is excited. If it helps, that is a service we provide: an independent
          technical review of an AI purchase before the signature, from people with no stake in whether the
          deal closes.
        </P>
      </ArticleLayout>

      <CtaBand
        heading={<>Evaluating a vendor <Squiggle>right now</Squiggle>?</>}
        text="We review AI contracts and run independent technical evaluations before you commit. One conversation could save you a very expensive lesson."
      />
    </>
  );
}
