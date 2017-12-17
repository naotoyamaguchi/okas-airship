import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class Contact extends Component {

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
      <div className="contact">
          <div>
             <h1><Link to="/appointment">Make an Appointment!</Link></h1>
             <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum alias dolore illo dolorum eum, enim perspiciatis doloribus est recusandae quo quibusdam consequatur hic, quos animi praesentium ipsum rem cumque. Maiores?</span>
             <span>Atque adipisci pariatur magni, eligendi, eaque in asperiores eius laboriosam iure ipsa nostrum obcaecati autem placeat blanditiis dicta! Ab non harum rem dolor ipsum et necessitatibus! Repudiandae, dolores maiores explicabo!</span>
             <span>Suscipit illo ratione blanditiis in odio cupiditate repudiandae maxime nostrum tempore eaque odit delectus, sunt nobis, ipsa beatae asperiores unde labore natus praesentium maiores vitae at exercitationem consequuntur deserunt! Omnis!</span>
             <span>Sint incidunt tempora debitis saepe iusto iure. Veritatis commodi debitis tenetur officia quasi natus vero officiis necessitatibus labore mollitia odit id esse architecto, unde saepe consequatur accusamus modi vel, fugit.</span>
             <span>Assumenda atque ullam inventore incidunt velit, necessitatibus officia quae, est ut rerum iure doloribus minima aperiam perferendis suscipit minus voluptatem error voluptatibus! Ut omnis ab beatae, facilis illum et, explicabo!</span>
             <span>Sit neque adipisci quisquam ipsum. Quis quidem sint adipisci numquam accusantium doloremque nulla quasi explicabo ipsam sunt possimus, cum quos voluptate, ipsum sequi, quaerat omnis, laboriosam quia perferendis ducimus aperiam!</span>
             <span>Libero quod officiis nam ipsa dignissimos tenetur consectetur veniam, quo harum aut eligendi dolorum impedit, officia accusantium voluptatum similique expedita quaerat quidem id. Doloremque laudantium nihil ipsa, repellat possimus asperiores.</span>
             <span>Omnis, saepe, quis iure vero quia laboriosam temporibus dicta aliquid dolorem. Quaerat incidunt nostrum, eligendi, aliquam saepe distinctio sint placeat iure sit laborum perferendis error ab quisquam repudiandae nihil cupiditate.</span>
             <span>Minus at ut eius odio quasi, velit, molestiae nostrum alias veniam. Neque vel voluptas fugiat facere est, provident sed optio ratione dolor dolorem eaque, ipsum dolorum soluta eum consectetur laudantium?</span>
             <span>Vero voluptas iure in odit illo quisquam nobis, maiores adipisci cum deleniti commodi alias eum autem, dolore. Quae eos, consequatur, sunt ea necessitatibus numquam ratione in veniam laboriosam id, impedit!</span></p>
          </div>
      </div>
    );
  }
}

export default Contact;