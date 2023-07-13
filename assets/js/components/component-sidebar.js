function componentSidebar() {
  const currentDir = window.location.origin;

	return ` <div id="sidebar">
				<div class="inner">
				<nav id="menu">
					<header class="major">
						<h2>Меню</h2>
					</header>
					<ul>
						<li class="menu-item__btn"><a href="${currentDir}/index.html"><i class="fa-solid fa-house"></i> Головна</a>
						</li>
						<li class="menu-item__btn"><a href="${currentDir}/articles.html"><i class="fa-regular fa-file-lines"></i>
								Статті</a></li>
						<li class="menu-item__btn"><a href="${currentDir}/lessons.html"><i class="fa-solid fa-film"></i> Уроки</a>
						</li>
						<li class="menu-item__btn"><a href="${currentDir}/services.html"><i class="fa-solid fa-pen-ruler"></i>
								Cервіси</a></li>
						<li class="menu-item__btn"><a href="${currentDir}/assets/articles/podcasts/podcasts.html"><i
									class="fa-solid fa-podcast"></i>
								Подкасти</a></li>
						<li>
							<span class="opener menu-item__btn"><i class="fa-regular fa-lightbulb"></i>
								Генератори</span>
							<ul>
								<li class="menu-item__btn"><a
										href="${currentDir}/assets/generators/generator-memes/generator-memes.html"><i
											class="fa-regular fa-images"></i> Генератор ІТ-мемів</a></li>
								<li class="menu-item__btn"><a
										href="${currentDir}/assets/generators/generator-jokes/generator-jokes.html"><i
											class="fa-regular fa-face-smile-wink"></i> Генератор ІТ-жартів</a></li>
								<li class="menu-item__btn"><a
										href="${currentDir}/assets/generators/generator-motivations/generator-motivations.html"><i
											class="fa-solid fa-hand-fist"></i> Генератор ІТ-мотивації</a></li>
								<li class="menu-item__btn"><a
										href="${currentDir}/assets/generators/generator-facts/generator-facts.html"><i
											class="fa-solid fa-scroll"></i> Генератор ІТ-фактів</a></li>
							</ul>
						</li>
						<li class="menu-item__btn"><a href="${currentDir}/assets/articles/bloggers/bloggers.html"><i
									class="fa-brands fa-youtube"></i>
								Українські ІТ-ютубери</a></li>
						<li class="menu-item__btn"><a href="${currentDir}/donate.html"><i
									class="fa-solid fa-hand-holding-dollar"></i> Донат</a></li>
						<li class="menu-item__btn"><a href="${currentDir}/about-us.html"><i class="fa-solid fa-user-group"></i> Про
								нас</a></li>
					</ul>
				</nav>

					<section>
                    <header class="major">
						<h2>Люди читають:</h2>
					</header>
					<div class="mini-posts">
						<article>
							<a href="${currentDir}/assets/articles/git/improving-git/improving-git.html" class="image"><img
									src="${currentDir}/assets/articles/git/improving-git/improving-git.png" alt="" /></a>
							<a href="./assets/articles/git/improving-git/improving-git.html">
								<h3>Покращуємо процес роботи з Git</h3>
							</a>
							<p>Розповідаємо як краще працювати з комітами, які секрети можна застосовувати.</p>
						</article>
						<article>
							<a href="${currentDir}/assets/articles/bootstrap/bootstrap-responsive/bootstrap-responsive.html"
								class="image"><img src="${currentDir}/assets/articles/bootstrap/bootstrap-responsive/1.png"
									alt="" /></a>
							<a href="./assets/articles/bootstrap/bootstrap-responsive/bootstrap-responsive.html">
								<h3>Використання Bootstrap для адаптивної верстки</h3>
							</a>
							<p>Заощаджує час на розробку, витрачайте час тільки на прописування потрібних класів.</p>
						</article>
						<!-- <article>
							<a href="./assets/articles/node/node-need/node-need.html" class="image"><img
									src="./assets/articles/node/node-need/node-need.png" alt="" /></a>
							<a href="./assets/articles/node/node-need/node-need.html">
								<h3>Коли застосовують Node.js?</h3>
							</a>
							<p>Web-додаток, побудований з Node.js, буде легким та продуктивним рішенням.</p>
						</article> -->
						<article>
							<a href="https://itvdn.com/ua/landing/free-for-ukraine?utm_source=web-developer_free_for_ukraine"
								target="_blank" class="image"><img src="${currentDir}/images/itvdn.png" alt="screen" /></a>
							<a href="https://itvdn.com/ua/landing/free-for-ukraine?utm_source=web-developer_free_for_ukraine"
								target="_blank">
								<h3>Вивчайте програмування безкоштовно</h3>
							</a>
							<p>Відкриваємо доступ до бази IT відео курсів з Python, FrontEnd, JavaScript, C# та C++,
								Java, QA, мобільній розробці на
								Android та iOS та інших.</p>
							<a href="https://itvdn.com/ua/landing/free-for-ukraine?utm_source=web-developer_free_for_ukraine"
								class="button big" target="_blank">Перейти</a>
						</article>
						<article>
							<a href="https://edu.cbsystematics.com/ua?utm_source=web-developer_banner"
								target="_blank" class="image"><img src="${currentDir}/images/cyberbionic.png" alt="screen" /></a>
							<a href="https://edu.cbsystematics.com/ua?utm_source=web-developer_banner"
								target="_blank">
								<h3>Додаткова знижка 10% за промокодом WEBDEV10</h3>
							</a>
							<p>Вивчай програмування у групі з ментором і асистентом - практичні завдання, фідбек, курсові проєкти, стажування та
							працевлаштування.</p>
							<a href="https://edu.cbsystematics.com/ua?utm_source=web-developer_banner"
								class="button big" target="_blank">Перейти</a>
						</article>
					</div>
                    </section>

									<section>
					<header class="major">
						<h2>Зв'язатись</h2>
					</header>
					<p>Якщо у Вас є цікаві ідеї, пропозиції або навіть подяка щодо нашої освітньої платформи - Ви
						можете написати адміністратору в зручний для вас спосіб.</p>
					<ul class="contact">
						<li class="icon brands fa-telegram"><a href="https://t.me/dmitryberesten">Дмитро в телеграм</a>
						</li>
						<li class="icon brands fa-instagram"><a
								href="https://www.instagram.com/dmitry_beresten" target="_blank">@dmitry_beresten</a></li>
						<li class="icon solid fa-home">Київ, Україна!</li>
					</ul>
				</section>

						<footer id="footer">
					<p class="copyright">&copy; Всі права захищені. <br><br> <span
							class="footer-text">web-developer.in.ua</span> <br><br> <a
							href="https://www.linkedin.com/in/dmytrii-beresten" class="icon brands fa-linkedin" target="_blank">
							dmitryberesten</a>.
				        </footer>
						</div> 
						</div> 
`;
}

const bannerContainer = document.querySelector("#component-sidebar");
bannerContainer.innerHTML = componentSidebar();
