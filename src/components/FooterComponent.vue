<template>
	<footer class="footer">
		<a href="to github">GitHub</a>
		<p>|</p>
		<a href="https://www.searchmetrics.com/de/glossar/progressive-web-apps/">Did you know this is a PWA ???</a>
	</footer>
</template>

<style lang="scss">
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 1rem;
	margin: auto;
	background-color: gray;

	p,
	a {
		margin: auto 0;
	}

}
</style>