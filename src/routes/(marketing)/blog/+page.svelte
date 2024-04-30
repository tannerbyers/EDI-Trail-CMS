<script lang="ts">
  import { sortedBlogPosts, blogInfo } from "./posts"
</script>

<svelte:head>
  <title>{blogInfo.name}</title>
  <meta name="description" content="Our blog posts." />
</svelte:head>

<div class="max-w-lg px-6 py-8 mx-auto lg:py-12">
  <div
    class="flex items-baseline gap-3 text-3xl font-medium text-center lg:text-5xl text-primary place-content-center"
  >
    <div
      class="font-bold leading-relaxed text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
    >
      {blogInfo.name}
    </div>
    <a href="/blog/rss.xml" target="_blank" rel="noreferrer">
      <img
        class="flex-none object-contain w-5 h-5"
        src="/images/rss.svg"
        alt="rss feed"
      />
    </a>
  </div>
  <div class="text-lg text-center">A tech blog from the edi trail team.</div>

  {#each sortedBlogPosts as post}
    <a href={post.link}>
      <div class="flex-row my-6 overflow-hidden bg-white shadow-xl card">
        <div class="flex-none w-6 md:w-32 bg-secondary"></div>
        <div class="px-6 py-6">
          <div class="text-xl">{post.title}</div>
          <div class="text-sm text-accent">
            {post.parsedDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div class="text-slate-500">{post.description}</div>
        </div>
      </div>
    </a>
  {/each}
</div>
