<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="mb-1 text-2xl font-bold">Dashboard</h1>

<div class="p-4 rounded shadow">
  <h2 class="mb-1 font-bold text-l">
    Upload transaction:
    <a
      href="https://www.healthcarestartup.editrail.com/api/transactions/"
      class="mb-1 underline text-l"
      >https://www.healthcarestartup.editrail.com/api/transactions/</a
    >
  </h2>
  <h2 class="mb-1 font-bold text-l">
    Download transaction:
    <a
      href="https://www.healthcarestartup.editrail.com/api/transactions/"
      class="mb-1 underline text-l"
      >https://www.healthcarestartup.editrail.com/api/transactions?id=transactionId</a
    >
  </h2>

  <div class="my-6">
    <h1 class="mb-1 text-xl font-bold">Transaction</h1>
    <div class="stats shadow stats-vertical sm:stats-horizontal sm:w-[420px]">
      <div class="stat place-items-center">
        <div class="stat-title">Storage Call</div>
        <div class="stat-value">31K</div>
        <div class="stat-desc">↗︎ 546 (2%)</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Cache Hit</div>
        <div class="stat-value">4,200</div>
        <div class="stat-desc">↗︎ 40 (2%)</div>
      </div>
    </div>
  </div>
  <div class="my-6">
    <h1 class="mb-1 text-xl font-bold">Costs</h1>
    <div class="stats shadow stats-vertical sm:stats-horizontal sm:w-[420px]">
      <div class="stat place-items-center">
        <div class="stat-title">Spent</div>
        <div class="stat-value">$1,200</div>
        <div class="stat-desc">↘︎ 90 (14%)</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Savings</div>
        <div class="text-green-700 stat-value">$42</div>
        <div class="stat-desc">↘︎ 6 (12%)</div>
      </div>
    </div>
  </div>
  <div class="my-6">
    <h1 class="mb-1 text-xl font-bold">Performance</h1>
    <div class="stats shadow stats-vertical sm:stats-horizontal sm:w-[420px]">
      <div class="stat place-items-center">
        <div class="stat-title">Response Time</div>
        <div class="text-yellow-600 stat-value">4.2ms</div>
        <div class="stat-desc">↘︎ .1ms (20%)</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Transaction Size</div>
        <div class="stat-value">840 bytes</div>
        <div class="stat-desc">↘︎ 6 (2%)</div>
      </div>
    </div>
  </div>
</div>
