<?php
/*
 Template Name: Custom Page Example
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php

if ( ! empty( $_POST ) ) {
	if(isset($_POST['contactName'])){

	}
}

?>

<?php get_header(); ?>

			<div id="content" class="form">

				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all t-all d-all cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<form action="<?php the_permalink(); ?>" id="contactForm" method="post">
									<ul>
										<li>
											<label for="contactName">Name:</label>
											<input type="text" name="contactName" id="contactName" value="" />
										</li>
										<li>
											<label for="email">Email</label>
											<input type="text" name="email" id="email" value="" />
										</li>
										<li>
											<label for="commentsText">Message:</label>
											<textarea name="comments" id="commentsText" rows="20" cols="30"></textarea>
										</li>
										<li>
											<button type="submit">Send email</button>
										</li>
									</ul>
									<input type="hidden" name="submitted" id="submitted" value="true" />
								</form>

							</article>

							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry cf">
											<header class="article-header">
												<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
											<section class="entry-content">
												<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the page-custom.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						</main>

				</div>

			</div>


<?php get_footer(); ?>
