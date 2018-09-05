<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io" 
            alt="Humam" width="112" height="28">
            </a>

            <router-link to="/home" class="navbar-item">Home</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
    </nav>
</template>
