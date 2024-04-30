<script>
  import "../../app.css"
</script>

<div class="container mx-auto navbar bg-base-100">
  <div class="flex-1">
    <a class="text-xl normal-case btn btn-ghost" href="/">EDI TRAIL</a>
  </div>
  <div class="flex-none">
    <ul class="hidden px-1 text-lg font-bold menu menu-horizontal sm:flex">
      <li class="md:mx-4">
        <a href="https://github.com/tannerbyers" class="border border-primary"
          >★ us on Github</a
        >
      </li>
      <li class="md:mx-2"><a href="/blog">Blog</a></li>
      <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
      <li class="md:mx-2"><a href="/account">Account</a></li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold"
      >
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/account">Account</a></li>
        <li>
          <a href="https://github.com/tannerbyers" class="border border-primary"
            >★ us on Github</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  <slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="p-10 text-base footer gap-x-48 lg:gap-x-64 xl:gap-x-96 place-content-center"
  >
    <nav>
      <span class="footer-title opacity-80">Explore</span>
      <a class="mb-1 link link-hover" href="/">Overview</a>
      <a class="my-1 link link-hover" href="/pricing">Pricing</a>
      <a class="my-1 link link-hover" href="/blog">Blog</a>
      <a class="my-1 link link-hover" href="/contact_us">Contact Us</a>
      <a
        class="my-1 link link-hover"
        href="https://github.com/CriticalMoments/CMSaasStarter">Github</a
      >
    </nav>
    <aside>
      <span class="footer-title opacity-80">EDI Trail</span>
      <a class="link link-hover max-w-[260px]" href="https://editrail.com">
        <!-- <img
          alt="Critical Moments Logo"
          src="/images/cm_logo.svg"
          class="w-[180px] mb-3 aspect-[420/154]"
        /> -->
        An Open Source Modern EDI Platform for storing data at scale and minimal
        costs.
      </a>
    </aside>
  </footer>
</div>
