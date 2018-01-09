import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

class Faq extends Component {

  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 1;
    });
  }

  componentWillUnmount(){
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 1;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 0;
    });
  }

  render() {
    return (
      <div className="App" style={{background: "beige"}}>
        <div className="faq">
          <a className="faq-question-link" href="#question-10">Question 10</a>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <hr></hr>
          <div id="accordion" role="tablist">
            <div class="card">
              <div class="card-header" role="tab" id="headingOne">
                <h5 class="mb-0">
                  <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseOne">
                    If my vehicle's frame is damaged, is it a total loss?
                  </a>
                </h5>
              </div>
              <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  No. A car is a total loss only when the price of repairs exceeds the insurance company's determined value of your vehicle. Nowadays, most cars are built using unibody (frame and body as one) construction. Our highly skilled technicians, with the aid of our state-of the-art computer measuring system , can return your vehicle to its original factory specifications. If it is determined that the frame section is bent beyond repair, that section can simply be replaced.
                </div>
              </div>
            </div>
            <hr></hr>
            <div class="card">
              <div class="card-header" role="tab" id="headingTwo">
                <h5 class="mb-0">
                  <a class="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                    How long will my repair take?
                  </a>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  As long as it fucking takes.
                </div>
              </div>
            </div>
            <hr></hr>
            <div class="card">
              <div class="card-header" role="tab" id="headingThree">
                <h5 class="mb-0">
                  <a class="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                    What are the names of Santa's reindeers?
                  </a>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Dashuh Dansuh Pransuh Veexun Kahmet Kyoopid Donnah Bleetzun
                </div>
              </div>
            </div>
          </div>

          {/*<ul>
            <ul>
              <li>If my vehicle's frame is damaged, is it a total loss?</li>
              <li>No. A car is a total loss only when the price of repairs exceeds the insurance company's determined value of your vehicle. Nowadays, most cars are built using unibody (frame and body as one) construction. Our highly skilled technicians, with the aid of our state-of the-art computer measuring system , can return your vehicle to its original factory specifications. If it is determined that the frame section is bent beyond repair, that section can simply be replaced. </li>
            </ul>
            <ul>
              <li>If my vehicle's frame is damaged, is it a total loss?</li>
              <li>No. A car is a total loss only when the price of repairs exceeds the insurance company's determined value of your vehicle. Nowadays, most cars are built using unibody (frame and body as one) construction. Our highly skilled technicians, with the aid of our state-of the-art computer measuring system , can return your vehicle to its original factory specifications. If it is determined that the frame section is bent beyond repair, that section can simply be replaced. </li>
            </ul>
            <ul>
              <li>If my vehicle's frame is damaged, is it a total loss?</li>
              <li>No. A car is a total loss only when the price of repairs exceeds the insurance company's determined value of your vehicle. Nowadays, most cars are built using unibody (frame and body as one) construction. Our highly skilled technicians, with the aid of our state-of the-art computer measuring system , can return your vehicle to its original factory specifications. If it is determined that the frame section is bent beyond repair, that section can simply be replaced. </li>
            </ul>
            <ul>
              <li>How long will my repair take?</li>
              <li><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nesciunt ex quaerat eius blanditiis voluptatem quibusdam eos fugit minus officiis esse, nisi, omnis, optio quos eveniet accusamus incidunt voluptates laboriosam.</div>
              <div>Tenetur accusamus, omnis quasi ad laudantium iusto aut, aperiam quia nam rerum cupiditate doloremque qui iure esse quam, labore unde. Explicabo doloremque omnis aspernatur ratione, fugit suscipit consequatur eum provident.</div>
              <div>Animi error labore facere sit totam suscipit sequi dolor pariatur. Iste at debitis cupiditate quibusdam soluta laudantium sit voluptatum. Mollitia sunt, enim deleniti vitae nesciunt possimus praesentium laboriosam asperiores perspiciatis.</div>
              <div>Sed facilis quisquam, tempore iure alias nihil recusandae ab optio voluptatibus impedit aut officiis dolorem laboriosam ipsum explicabo ducimus possimus, fugit cum maxime aperiam accusantium sunt quaerat. Delectus quas, rerum.</div>
              <div>Possimus, quia ullam nulla laboriosam dolore obcaecati, libero optio non, tempore soluta dicta officia nam dolor illo saepe, modi amet nesciunt. Ea deserunt fuga libero! Ipsam est porro vitae nam?</div></li>
            </ul>
            <ul>
              <li>How long will my repair take?</li>
              <li><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quod placeat ab accusamus veritatis praesentium, reiciendis atque delectus, quis incidunt reprehenderit autem doloremque minus sapiente inventore nam! Repellat, quas maiores.</div>
              <div>Hic repellendus error impedit cupiditate sunt animi, perspiciatis nesciunt molestiae aliquam dignissimos eum ut ipsum non consequatur repellat suscipit blanditiis atque, fugit, officiis, provident modi. Amet nam, officiis autem facere.</div>
              <div>Id consequatur veniam optio eveniet perspiciatis accusamus nisi repudiandae hic ipsum nesciunt possimus soluta accusantium modi est animi, alias excepturi eius praesentium voluptatibus cum ut. Maxime velit architecto odio placeat!</div>
              <div>Quas quidem cumque saepe minus quos, illo facere? Aliquam officia, dolor earum ratione amet voluptas cumque nam totam autem maiores. Expedita necessitatibus harum in, corrupti, voluptates dignissimos illum molestiae eveniet.</div>
              <div>Esse voluptatibus, non vero provident tempora, rem mollitia quasi nostrum earum aliquid repellat. Iste id, maiores possimus consectetur impedit, quibusdam, et reiciendis laudantium soluta veniam, cum officiis libero esse asperiores.</div></li>
            </ul>

            
          </ul>*/}
        </div>

        
      </div>
    );
  }
}

export default Faq;