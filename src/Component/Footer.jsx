import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>About Apt </h5>
					<ul class="list-unstyled quick-links">
						<li><a href=""><i class="fa fa-angle-double-right"></i>Who Are We?</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Our Team</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Email: info@consultingapt.com</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Phone: +1 604 715 50 34</a></li>
			
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Top Certificatin</h5>
					<ul class="list-unstyled quick-links">
						<li><a href=""><i class="fa fa-angle-double-right"></i>Microsoft Azure Certified AI Engineer- Associate</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Microsoft Azure Certified Data Engineer- Associate</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Microsoft Azure Certified Data Scientist- Associate</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Red Hat Certified Administrator</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Red Hat Certified Developer</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Learning Path</h5>
					<ul class="list-unstyled quick-links">
						<li><a href=""><i class="fa fa-angle-double-right"></i>AI and ML</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Career Advice</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Cloud Computing</a></li>
						<li><a href=""><i class="fa fa-angle-double-right"></i>Cloud Security</a></li>
						<li><a href="" title="Design and developed by"><i class="fa fa-angle-double-right"></i>Data Engineering
 </a></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href=""><i class="fa fa-facebook"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href=""><i class="fa fa-google-plus"></i></a></li>
						<li class="list-inline-item"><a href="" target="_blank"><i class="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				
			</div>	
		
		</div>
	</section>
    </>
  )
}

export default Footer