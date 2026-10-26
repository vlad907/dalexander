import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Planning",
  description:
    "Choosing a business structure: Sole Proprietorships, Partnerships, LLCs, C Corporations and S Corporations. 20+ years of business planning experience in Northern California.",
};

export default function BusinessPlanningPage() {
  return (
    <PageShell
      eyebrow="Business Planning Services"
      title="Business Planning"
      lede={firm.journey}
    >
      <p className="text-lg">
        We have 20+ years of experience in Business Planning and drafting
        business structures such as Corporations and LLCs.
      </p>

      <h2 id="choosing">Choosing a business structure</h2>
      <p>
        The business structure you choose influences everything from
        day-to-day operations to taxes to how much of your personal assets are
        at risk. You should choose a business structure that gives you the
        right balance of legal protections and benefits. Call us to set up a
        meeting to discuss the best options for you &mdash;{" "}
        <a href={firm.tollFreeHref}>(800) 530-4529</a>.
      </p>
      <p>
        <strong>Choose carefully.</strong> While you may convert to a different
        business structure in the future, there may be restrictions based on
        your location and type of business. This could also result in tax
        consequences and unintended dissolution, among other complications.
        This is why you should seek the advice of an attorney before setting up
        your business structure.
      </p>
      <p>
        There are many forms of business structures, including a Sole
        Proprietorship, a Partnership, a Limited Liability Company (LLC) and a
        Corporation (INC). In general, the most popular business entity is the
        S Corporation, which is described below. But first, let&apos;s go over
        all the alternatives.
      </p>

      <h2 id="sole-proprietorship">Sole Proprietorship</h2>
      <p>
        You&apos;re automatically considered to be a sole proprietorship if you
        do business activities but don&apos;t register as any other kind of
        business. Sole proprietorships do not produce a separate business
        entity. This means your business assets and liabilities are not
        separate from your personal assets and liabilities. You can be held
        personally liable for the debts and obligations of the business. Sole
        proprietors are still able to get a trade name. It can also be hard to
        raise money because you can&apos;t sell stock, and banks are hesitant to
        lend to sole proprietorships. Finally, sole proprietors pay
        &ldquo;self-employment&rdquo; tax of about 15.3% that can be eliminated
        or reduced with other business entities. Sole proprietorships can be a
        good choice for low-risk businesses and owners who want to test their
        business idea before forming a more formal business.
      </p>

      <h2 id="partnerships">Partnerships</h2>
      <p>
        These are the simplest structure for two or more people to own a
        business together. There are two common kinds of partnerships: limited
        partnerships (LP) and limited liability partnerships (LLP). Limited
        partnerships have only one general partner with unlimited liability,
        and all other partners have limited liability. The partners with
        limited liability also tend to have limited control over the company,
        which is documented in a partnership agreement. Profits are passed
        through to personal tax returns, and the general partner &mdash; the
        partner without limited liability &mdash; must also pay self-employment
        taxes of about 15.3%.
      </p>
      <p>
        Limited liability partnerships are similar to limited partnerships but
        give limited liability to every owner. An LLP protects each partner
        from debts against the partnership; they won&apos;t be responsible for
        the actions of other partners but are also subject to self-employment
        taxes of about 15.3%. Partnerships can be a good choice for businesses
        with multiple owners, professional groups (like attorneys), and groups
        who want to test their business idea before forming a more formal
        business.
      </p>

      <h2 id="llc">Limited Liability Company (LLC)</h2>
      <p>
        An LLC lets you take advantage of the benefits of both the corporation
        and partnership business structures. LLCs protect you from personal
        liability in most instances. Profits and losses can get passed through
        to your personal income without facing corporate taxes. However,
        members of an LLC are considered self-employed and must pay
        self-employment taxes of about 15.3% unless the LLC makes an
        S-Corporation Election. LLCs can have a limited life in many states.
        When a member joins or leaves an LLC, some states may require the LLC
        to be dissolved and re-formed with new membership &mdash; unless
        there&apos;s already an agreement in place within the LLC for buying,
        selling, and transferring ownership.
      </p>
      <p>
        Additionally, some licensed professions, such as the legal profession,
        do not allow their licensees to use an LLC &mdash; instead they require
        them to use a Corporation or some type of partnership. LLCs can be a
        good choice for medium- or higher-risk businesses and are usually used
        for businesses that own real estate, because titling real estate in or
        out of an LLC is usually not considered a change in ownership for
        property tax reassessment purposes.
      </p>

      <h2 id="corporations">Corporations (INC)</h2>
      <p>
        All corporations start off as a C corporation, which is a legal entity
        that is separate from its owners. Corporations can make a profit, be
        taxed, and can be held legally liable. Corporations offer the strongest
        protection to their owners from personal liability, but the cost to
        form a corporation is higher than other structures. Corporations also
        require more extensive record-keeping, operational processes, and
        reporting. Unlike sole proprietors, partnerships, and LLCs, C
        corporations pay income tax on their profits. Corporations have a
        completely independent life separate from their shareholders. If a
        shareholder leaves the company or sells his or her shares, the C
        corporation can continue doing business relatively undisturbed.
        Corporations also have an advantage when it comes to raising capital
        because they can raise funds through the sale of stock, which can also
        be a benefit in attracting employees.
      </p>

      <h2 id="s-corporation">The S Corporation</h2>
      <p>
        The most popular corporate structure is the S corporation, which is a
        special type of corporation that&apos;s designed to avoid the double
        taxation drawback of regular C corporations. S corporations allow
        profits, and some losses, to be passed through directly to
        owners&apos; personal income without ever being subject to corporate
        tax rates. In general, an S corporation starts off as a C corporation
        and then the corporation files an &ldquo;S corporation election&rdquo;
        by filing IRS Form 2553. Not all states tax S corps equally, but most
        recognize them the same way the federal government does and tax the
        shareholders accordingly.
      </p>
      <p>
        S corporations also have an independent life, just like C
        corporations. If a shareholder leaves the company or sells his or her
        shares, the S corporation can continue doing business relatively
        undisturbed. S corps can be a good choice for a business that would
        otherwise be a C corporation but meets the criteria to file as an S
        corporation, such as having less than 100 shareholders.
      </p>
    </PageShell>
  );
}
