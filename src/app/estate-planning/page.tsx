import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estate Planning",
  description:
    "Trusts, Pour-over Wills, Financial Durable Powers of Attorney, Advanced Health Care Directives and Trust Funding from Chico estate planning attorney Daniel H. Alexander.",
};

export default function EstatePlanningPage() {
  return (
    <PageShell
      eyebrow="Estate Planning Services"
      title="Estate Planning"
      lede={firm.journey}
    >
      <p className="text-lg">
        I&apos;m always asked: &ldquo;What is an Estate Plan?&rdquo; Simply put,
        an estate plan is a blueprint for the protection of you and your assets
        while you are alive and for the distribution of your assets when you
        die. While you are living, an estate plan should address your children,
        your finances, assets and retirement income, as well as your health and
        well-being. When you pass, it addresses not only the question of who
        will receive your assets, but also the methods and timing of the
        distribution.
      </p>
      <p>
        A good Estate Plan will usually include a <strong>Trust</strong>,{" "}
        <strong>Pour-over Will</strong>,{" "}
        <strong>Financial Durable Powers of Attorney</strong>,{" "}
        <strong>Advanced Health Care Directive</strong> (Power of Attorney for
        Health Care with a physician directive), and documents to transfer
        assets into the trust called <strong>Trust Funding</strong>.
      </p>

      <h2 id="trusts">Trusts</h2>
      <p>
        A revocable living trust is the most common type of trust used for
        family planning and is a trust document created by an individual or
        individuals that can be changed over time. Revocable living trusts are
        used to avoid or minimize probate, protect the privacy of the trust
        owner and beneficiaries of the trust and can be used to minimize or
        eliminate estate taxes. Many times, a spendthrift provision is put into
        a living trust to protect against creditors of a beneficiary.
        Irrevocable trusts, on the other hand, are generally not used for basic
        family planning, but are instead used for planning and control of
        assets for a disabled person.
      </p>

      <h2 id="pour-over-will">Pour-Over Will</h2>
      <p>
        A pour-over Will is a legal document that ensures an individual&apos;s
        remaining assets outside of a trust will transfer to a previously
        established trust upon their death. It is basically a back-up device to
        fund your remaining assets outside your trust into your trust after
        your death. Additionally, a pour-over Will can have additional language
        regarding guardianship of minor children following the death of the
        parent.
      </p>

      <h2 id="powers-of-attorney">Financial Durable Powers of Attorney</h2>
      <p>
        A financial power of attorney is a legal document that allows a trusted
        agent the power to make and execute financial decisions for the
        principal (you). Most financial powers of attorney are
        &ldquo;durable,&rdquo; which means they remain in effect after the
        principal becomes incapacitated. Some are effective immediately so your
        agent can act right away without proving incapacity and some have
        &ldquo;springing&rdquo; powers that only allow your agent to act if you
        are proven incapacitated. The most common is one that is effective
        immediately.
      </p>

      <h2 id="health-care-directive">Advanced Health Care Directive</h2>
      <p>
        An advanced health care directive is a legal document that allows an
        individual to empower another person to make decisions about their
        medical care, including comfort care, end of life decisions (physician
        directives) and organ donation. These are of course usually
        &ldquo;durable&rdquo; so that they remain in effect after the principal
        becomes incapacitated.
      </p>

      <h2 id="trust-funding">Trust Funding</h2>
      <p>
        Funding your trust is the process of transferring your assets from you
        to your trust or making the trust the beneficiary of a particular asset
        and is probably the most important step to take after your trust has
        been signed. Failure to fund your trust with your assets may cause those
        assets to go through a Probate process.
      </p>
      <p>
        To fund your trust, you usually physically change the titles of your
        assets from your individual name to the name of your trust. If you are
        married, you and your spouse might change the titles of your jointly
        owned assets to your joint trust or to each of your individual trusts,
        whether in equal or unequal portions. For example, you can transfer your
        home (or any real property) to the trust with a deed, a document that
        transfers ownership to the trust.
      </p>
      <p>
        On many assets, like bank accounts or non-qualified investment accounts
        (regular investment accounts), you can set up a Pay on Death (POD) or
        Transfer on Death (TOD) so that the account stays in your individual
        name during your life and then transfers into your trust upon your
        death. Sometimes this is the easiest and most convenient way to fund
        these accounts into your trust.
      </p>
      <p>
        Finally, you may not be able to physically transfer all of your assets
        to your trust. For example, qualified accounts such as individual
        retirement accounts (IRAs) cannot be owned by your trust while you are
        living. However, you can change the beneficiary designation for your IRA
        to your trust as primary or contingent beneficiary to receive retirement
        benefits after your death, much like the POD or TOD described above.
      </p>

      <h2 id="get-started">Getting started</h2>
      <p>
        We have an Estate Planning Questionnaire for a single person, an Estate
        Planning Questionnaire for a married couple, our client guide &mdash;{" "}
        <em>Putting Your Estate in Order</em> &mdash; and our Estate Planning
        Fee Agreement. Of course, if you want to schedule an appointment or if
        you have questions, give us a call:{" "}
        <a href={firm.phoneHref}>{firm.phoneDisplay}</a> or{" "}
        <a href={firm.tollFreeHref}>{firm.tollFreeDisplay}</a>.
      </p>
    </PageShell>
  );
}
