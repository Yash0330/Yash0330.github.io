let showMenu = false

// HTML GENERATOR FUNCTIONS
function generateHomePage(){
	return `
		<div class="home">
			<div class="hero">
				<div class="hero-header">
					<header>
						<div class="profile-pic-wrapper">
							<img src="images/profile.png" alt="" class="profile">
						</div>
						
					</header>
					<div class="hero-text">
						<h1>Yashwanth</h1>
						<h2>AI Enthusiast</h2>
						<br>
						<i><h3>I am currently studying Electronics and communication Engineering Sophomore year IIT Guwahati.</h3>
						<h4>I am a lover of dogs, music and all things code!</h4></i>
						<div class="cta-btns">
							<button class="cta-projects">Projects</button>
							<button class="cta-contact">Contact Me</button>
						</div>
					</div>
				</div>
				<br>
			</div>
		</div>	
	
	`
}

function generateAboutMePage (){
	return `	
		<div class="about-me">
			<div class="bio">
				<header>
					<h1>About</h1>
				</header>
				<h2>I am an Artificial Intelligence enthusiast pursuing my undergraduate degree in Electronics and Communication Engineering at IIT Guwahati.</h2>
				<br>
				<i><h3>I am proficient at Python Programming (adept at Tensorflow, Keras, scikit-learn; working proficiency in PyTorch), C++ and MATLAB Programming.</h3>
				<h4>I love the challenge of solving complex problems with a team and always striving to learn from my teammates. </h4>
				<h5>When I’m not doing AI/ML or coding, you can find me playing games, listening and enjoying music, writing stories, solving different types of Rubik's Cube, or just catching up with friends over a cup of coffee!</h5></i>
			</div>
			<br>
		</div>
`
}

function generateProjectsPage(){
	return `
		<div class="projects-page">	
			<header>
				<h1>Projects</h1>
			</header>
		<div class="project">
			<div class="project1">
				<div class="left-side">
					<h2>Fake-News-Detection</h2>
					<div class="description">
						A project done in a team of four by IITG.ai for Techivence IIT Guwahati.Fake News is a spread of disinformation and hoaxes through any news platform.We divided our technique into 3 categories to detect Fake News using AI.First Political Fake News applied Bert model to get state of art accuracy in LIAR LIAR Dataset with 70 percent on test set and also identified Clickbaits and Fake Articles.
					</div>
				</div>
				<div class="right-side">
					<div class="thumbnail-wrapper">
						<a href="https://github.com/IITGuwahati-AI/Fake-News-Detection" target="_blank">
							<img src="images/Fake_NewsAI-1.jpg" alt="" class="quiz-app-ss">
						</a>
					</div>
				</div>
			</div>
			<div class="technologies">
				<ul class='tech-icons'>
					<li><img src="images/python.svg" alt=""></li>
					<li><img src="images/tensorflow.svg" alt=""></li>
					<li><img src="images/javascript.svg" alt=""></li>
					<li><img src="images/pytorch.svg" alt=""></li>
				</ul>
			</div>
			<div class="links">
				<a href="https://github.com/IITGuwahati-AI/Fake-News-Detection" target="_blank">
					<button class="link">GitHub Repo</button>
				</a>
			</div>
		</div>
		
		<div class="project">
			<div class="project1">
				<div class="left-side">
					<h2>Face Generation and Styling by StyleGan</h2>
					<div class="description">
						The alternative generator architecture for generative adversarial networks, borrowing from style transfer literature. This leads to an automatically learned, unsupervised separation of high-level attributes (e.g., pose and identity when trained on human faces) and stochastic variation in the generated images (e.g., freckles, hair), and it enables intuitive, scale-specific control of the synthesis.Pretrained model trained from NVIDIA was used to train on our faces and was used to style user specific own faces. 
					</div>
				</div>
				<div class="right-side">
					<div class="thumbnail-wrapper">
						<a href="https://github.com/IITGuwahati-AI/StyleGAN" target="_blank">
							<img src="images/stylegan.jpg" alt="" class="quiz-app-ss">
						</a>
					</div>
				</div>
			</div>
			<div class="technologies">
				<ul class='tech-icons'>
					<li><img src="images/python.svg" alt=""></li>
					<li><img src="images/tensorflow.svg" alt=""></li>
					<li><img src="images/nvidia.svg" alt=""></li>
					<li><img src="images/anaconda.svg" alt=""></li>
				</ul>
			</div>
			<div class="links">
				<a href="https://github.com/IITGuwahati-AI/StyleGAN" target="_blank">
					<button class="link">GitHub Repo</button>
				</a>
			</div>
		</div>
		</div>

		<div class="project">
			<div class="project1">
				<div class="left-side">
					<h2>Car-detection-for-Autonomous-Driving</h2>
					<div class="description">
						A cousera project in which the data was from a camera mounted in car and used a pre-trained YOLO model to train and get bounding boxes and filtered through all the boxes using non-max suppression.
					</div>
				</div>
				<div class="right-side">
					<div class="thumbnail-wrapper">
						<a href="https://github.com/Yash0330/Car-detection-for-Autonomous-Driving" target="_blank">
							<img src="images/car_detection.jpg" alt="" class="quiz-app-ss">
						</a>
					</div>
				</div>
			</div>
			<div class="technologies">
				<ul class='tech-icons'>
					<li><img src="images/python.svg" alt=""></li>
					<li><img src="images/tensorflow.svg" alt=""></li>
					<li><img src="images/keras.svg" alt=""></li>
					<li><img src="images/opencv.svg" alt=""></li>
				</ul>
			</div>
			<div class="links">
				<a href="https://github.com/Yash0330/Car-detection-for-Autonomous-Driving" target="_blank">
					<button class="link">GitHub Repo</button>
				</a>
			</div>
		</div>
    <div class="projects-page">	
			<header>
				<h1>Articles</h1>
			</header>
    <div class="project">
			<div class="project1">
				<div class="left-side">
					<h2>Also checkout my medium article on <br> Callbacks in Keras</h2>
					<div class="description">
						A callback is a set of functions to be applied at given stages of the training procedure. You can use callbacks to get a view on internal states and statistics of the model during training.
					</div>
				</div>
				<div class="right-side">
					<div class="thumbnail-wrapper">
						<a href="https://medium.com/iitg-ai/how-to-use-callbacks-in-keras-to-visualize-monitor-and-improve-your-deep-learning-model-c9ca37901b28" target="_blank">
							<img src="images/callback.png" alt="" class="quiz-app-ss">
						</a>
					</div>
				</div>
			</div>
			<div class="links">
				<a href="https://medium.com/iitg-ai/how-to-use-callbacks-in-keras-to-visualize-monitor-and-improve-your-deep-learning-model-c9ca37901b28" target="_blank">
					<button class="link">Medium Article</button>
				</a>
			</div>
		</div>
    </div>
`
}

function generateContactPage(){
	return `
		<div class="contact-pg">
			<div class="contact-socials">
				<header>
					<h1> Contact </h1>
				</header>
		
				<ul class="contact-socials-ul">
					<li>
						<a href="mailto:yashwanthm0330@gmail.com">
							<i class="fas fa-envelope"></i>
							<span class="contact-text">
								yashwanthm0330@gmail.com
							</span>
						</a> 
					</li>
          <li>
						<a href="https://www.linkedin.com/in/yashwanth-m-982934169/" target="_blank">		<i class="fab fa-linkedin"></i>
							<span class="contact-text">
								linkedin.com/in/yashwanth-m-982934169
							</span>
						</a>
					</li>
          <li>
						<a href="https://www.facebook.com/profile.php?id=100011686931983">
							<i class="fab fa-facebook-square"></i>
							<span class="contact-text">
								facebook.com/yashwanth.m.93
							</span>
						</a> 
					</li>
					<li>
						<a href="https://github.com/Yash0330" target="_blank">
							<i class="fab fa-github"></i>
							<span class="contact-text">
								github.com/Yash0330
							</span>
						</a>
					</li>	
          <li>
						<a href="https://www.instagram.com/yash__0330/">
							<i class="fab fa-instagram"></i>
							<span class="contact-text">
								instagram.com/yash__0330
							</span>
						</a> 
					</li>	
					
				</ul>
			</div>
		`
}

// RENDER FUNCTION
function renderToPage(page){
	$('main').html(page)
}		


// NAVBAR ACTIVE-LINK FUNCTION
function navBorderBottom (toUnderline){
	$(toUnderline).css('border-bottom', '2px solid #848FA5')
	$(toUnderline).css('color', '#848FA5')

	let navLinks = $('.navbar-list li div')
	
	for (let i = 0 ; i < navLinks.length; i++){		
		if (`.${navLinks[i].className}` !== toUnderline){
			$(`.${navLinks[i].className}`).css('border-bottom', 'none')
			
			$(`.${navLinks[i].className}`).css('color', 'white')
		}
	}
	
	$('.home-icon').css('color', 'white')

}

// PAGE-GENERATOR FUNCTIONS

function homeGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()
	renderToPage(generateHomePage())
}

function aboutGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()
	renderToPage(generateAboutMePage())
}

function projectsGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()

	renderToPage(generateProjectsPage())
}

function contactGenerator(e){
	e.preventDefault()
	$('.menu').css('display', 'none');
	$('main').show()
	$('footer').show()

	renderToPage(generateContactPage())
}

// DROP-DOWN MENU 
function showHideDropDownMenu(){
	$('.dropdown-menu').on('click', (e)=>{
		showMenu = !showMenu

		if (showMenu){
			$('main').hide()
			$('footer').hide()
			$('.menu').css('display', 'flex')

		} else {
			$('.menu').css('display', 'none')
			$('main').show()
			$('footer').show()
		}
	})
}

// DROPDOWN MENU LINKS
function hamburgerClickHandlers(){
	$('.menu-home').on('click', (e)=>{
	 homeGenerator(e)
	})

	$('.about').on('click', (e)=>{
		 aboutGenerator(e)
	})


	$('.projects').on('click', (e)=>{
		projectsGenerator(e)
	})


	$('.contact').on('click', (e)=>{
		contactGenerator(e)
	})
}

// NAVBAR LINKS
function navBarLinkHandlers(){
	$('.home-icon').on('click', (e)=>{
		homeGenerator(e);

		let navLinks = $('.navbar-list li div')

		for (let i = 0 ; i < navLinks.length; i++){		
				$(`.${navLinks[i].className}`).css('border-bottom', 'none')

				$(`.${navLinks[i].className}`).css('color', 'white')
		}

		$('.home-icon').css('color', '#848FA5')

	})

	$('.nav-home').on('click', (e)=>{
		homeGenerator(e);
		navBorderBottom(`.${e.target.className}`)
	})

	$('.nav-about').on('click', (e)=>{
		aboutGenerator(e)
		navBorderBottom(`.${e.target.className}`)
	})

	$('.nav-projects').on('click', (e)=>{
		projectsGenerator(e)
		navBorderBottom(`.${e.target.className}`)
	})

	$('.nav-contact').on('click', (e)=>{
		contactGenerator(e);
		navBorderBottom(`.${e.target.className}`)
	})
}

// CTA BUTTONS
function CTAhandlers(){
	$('main').on('click', '.cta-projects', (e)=>{
		projectsGenerator(e);
		navBorderBottom('.nav-projects')
	})

	$('main').on('click', '.cta-contact', (e)=>{
		contactGenerator(e);
		navBorderBottom('.nav-contact')
	})
}

// LOAD PAGE FUNCTION
function loadPage(){
	renderToPage(generateHomePage())
	showHideDropDownMenu()
	hamburgerClickHandlers()
	navBarLinkHandlers()
	CTAhandlers()
}

// DOCUMENT-READY FUNCTION 
$(loadPage())
