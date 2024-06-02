<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Hello - Untung So's Labo
    </title>
</svelte:head>

<header>
    <h1>HTML5 Semantic Elements</h1>
    <p>This is the header section, containing introductory content or navigational links.</p>
</header>

<nav>
    <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
    </ul>
</nav>

<main>
    <section id="section1">
        <h2>Section 1</h2>
        <article>
            <h3>Article 1</h3>
            <p>This is an article within Section 1. Articles are intended to be self-contained content.</p>
            <aside>
                <p>This is an aside related to Article 1. Asides contain content indirectly related to the main content.</p>
            </aside>
        </article>
        <article>
            <h3>Article 2</h3>
            <p>This is another article within Section 1.</p>
        </article>
    </section>

    <section id="section2">
        <h2>Section 2</h2>
        <figure>
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
            <figcaption>Fig.1 - A placeholder image.</figcaption>
        </figure>
        <details>
            <summary>More Information</summary>
            <p>This is additional information hidden inside the details element. It can be shown or hidden by clicking.</p>
        </details>
    </section>

    <section id="section3">
        <h2>Section 3</h2>
        <p>This section contains some time-related content: <time datetime="2023-06-01">June 1, 2023</time></p>
        <p>You can also mark text for highlight: <mark>important text</mark>.</p>
        <dialog open>
            <p>This is a dialog element, used to display a popup or modal box.</p>
            <button>Close</button>
        </dialog>
    </section>
</main>

<footer>
    <p>&copy; 2024 Semantic Elements Example</p>
</footer>
