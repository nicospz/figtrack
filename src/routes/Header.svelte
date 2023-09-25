<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav class="w-full text-3xl text-slate-100">
		<ul class="flex flex-row justify-center gap-2">
			<li>
				<a href="/" class={`${$page.url.pathname === '/' ? 'font-bold' : 'font-normal'}`}>
					Ordered
				</a>
			</li>
			<li>
				<a
					href="/wished"
					class={`${$page.url.pathname === '/wished' ? 'font-bold' : 'font-normal'}`}
				>
					Wished
				</a>
			</li>
			<li>
				<a href="/owned" class={`${$page.url.pathname === '/owned' ? 'font-bold' : 'font-normal'}`}>
					Owned
				</a>
			</li>
		</ul>
	</nav>
</header>
