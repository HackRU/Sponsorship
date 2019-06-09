import React, { Component } from "react";


class Testimonials extends Component {
    render() {
        return(
            <div class="content">
		<div>
                    <h1 className="display-4 theme-font">Testimonials</h1><hr />
		</div>

		<div class="row">
                    <div class="col-lg-3">
			<div class="hpanel testimo-panel text-center">
                            <div> 
				<img alt="logo" class="img-fluid img-circle m-b"src="./assets/testimonials/t1.png"></img>
				<h3>Suzanne Link</h3>
				<div class="font-bold m-b-xs">Human Resource Management, 2019</div><hr />
				<p>
                                    "Hi everyone! Last year I attended HackRU, and it was an awesome experience. Even as someone with no background in ITI/ Computer Science, I was welcomed and included. I had a great time meeting new people and learning new skills. 10/10 would recommend!"
				</p>
                            </div>
			</div>
                    </div>
                    <div class="col-lg-3">
			<div class="hpanel testimo-panel text-center">
                            <div>
				<img alt="logo" class="img-fluid img-circle m-b" src="./assets/testimonials/t2.png"></img>
				<h3>Rishab Chawla</h3>
				<div class="font-bold m-b-xs">Computer Science 2020</div><hr />
				<p>
                                    "Built from the ground up, HackRU was the first hackathon to express the true essence of flavor. Capturing the natural characteristics of only the finest ingredients, HackRU is exceptional in taste - thanks to the personal commitment of the sponsors and organizers."
				</p>
                            </div>
			</div>
                    </div>
                    <div class="col-lg-3">
			<div class="hpanel testimo-panel text-center">
                            <div >
				<img alt="logo" class="img-fluid img-circle m-b" src="./assets/testimonials/t3.png"></img>
				<h3>Srivatsan Shankar</h3>
				<div class="font-bold m-b-xs">Chemical Engineering 2021</div><hr />
				<p>
                                    "HackRU was a great learning experience for me more than anything. There was more than enough help available from all the mentors and organizers. I really enjoyed the amount of free stuff we got by just participating! I’m Looking forward to taking part in the next HackRU as well."
				</p>
                            </div>
			</div>
                    </div>
                    <div class="col-lg-3">
			<div class="hpanel testimo-panel text-center">
                            <div>
				<img alt="logo" class="img-fluid img-circle m-b" src="./assets/testimonials/t4.png"></img>
				<h3>Ben Yang</h3>
				<div class="font-bold m-b-xs">Computer Science, Mathematics & Cognitive Science, 2020</div><hr />
				<p>
                                    "HackRU Spring 2018 was a really fun and exciting experience - from food to workshops to speakers, the venue really had everything! But aside from all that, it was also a really great experience to just sit down and learn with other people, regardless of whether they were my friends or not. While I wasn't able to finish my project, I was really happy that I learned something valuable at the end of the day."
				</p>
                            </div>
			</div>
                    </div>
                    
		</div>
            </div>
        )
    }
}

export default Testimonials;
