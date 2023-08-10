<template>
	<header class="header_titel">
		<img src="/lockcard.avif" alt="Lockcard logo">
		<nav>
			<router-link to="/">Blog</router-link> |
			<router-link to="/edit">Edit</router-link>
		</nav>
	</header>
</template>

<style lang="scss">
.header {
	&_titel {
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;

		img {
			object-fit: contain;
		}

		nav {
			margin: auto 0;

			a {
				text-decoration: none;
				color: black;
				font-size: large;
			}
		}
	}
}
</style>