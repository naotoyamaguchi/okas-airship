import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
import { Link } from 'react-router-dom';
import './index.css';

class Insurance extends Component {

  render () {
    return (
      <div className="App">
        <div className="insurance-page">
          <div className="insurance-page-header">
            <h1 className="header-title">
              Know Your Consumer Rights
            </h1>
            <hr/>
          </div>
          <div className="insurance-page-body">

            <div className="insurance-fact">
              <div className="fact-header">

              Choice of Repair Facility

              </div>
              <div className="fact-body">

              Choosing the body shop where your vehicle will be repaired is an important decision, and in most cases, you have the right to make that decision. Not all shops are alike, however, when it comes to having properly trained technicians and the equipment and facilities needed to fix your vehicle right, so making a well informed choice is key.

              Your insurance company may suggest you use one of its “direct-repair facilities”—these are shops with which the insurer has a contractual agreement, including both dealership and local independent shops. If you don’t already have a favorite body shop in mind, this may be a good choice.

              Family and friends who have gone through the repair process also can be a great source of advice, and don’t forget about your dealership—it may have its own body shop, but if it doesn’t, it can likely offer a list of reputable shops in the area.

              Remember, the body shop is fixing YOUR vehicle for YOU, and it’s important you’re comfortable with the shop you choose. If you’re making an insurance claim, your insurer pays the bill, but most states prohibit the insurer from requiring you use a particular shop—that means, ultimately, no matter what you hear, the body shop is YOUR CHOICE.

              </div>
            </div>




            <div className="insurance-fact">
              <div className="fact-header">

              Choice of Repair Parts

              </div>
              <div className="fact-body">

              As a consumer, you have the right to request that your vehicle be repaired only with Original Equipment (OE) collision replacement parts. These are the same parts that your vehicle manufacturer distributes to ensure proper fit, function, and most importantly, safety.

              Two factors influence whether your request will be honored: your insurance policy limitations and local (state) laws and regulations regarding collision repair.

              </div>
            </div>





            <div className="insurance-fact">
              <div className="fact-header">

              Insurance Policy Limitations

              </div>
              <div className="fact-body">

              Prior to being involved in an accident, check your policy to see what allowances may, or may not be, made for certain part types.

              Some policies may allow for OE parts in all circumstances, while others may allow for OE parts depending on the age of the vehicle. Some may specifically call for use of parts that are “like kind and quality,” usually indicating salvage parts. In other cases, insurance companies may offer two auto policies; one that specifies that only OE parts be used, and another specifying the use of only alternative parts.

              In addition, there may be policies available through a plan endorsed by your vehicle manufacturer, which assures OE parts for that brand of vehicle. <strong>Find out before you buy</strong>!


              </div>
            </div>



            <div className="insurance-fact">
              <div className="fact-header">

              State Laws and Regulations

              </div>
              <div className="fact-body">

              Most states require repair shops and/or insurers to disclose to their customers when something other than OE parts will be used, usually as part of the estimating process.

              Far fewer states—about a quarter—also require shops and/or insurers to get your consent before using non-OE parts. These laws and regulations vary greatly, however, and most come with time limits—such as two years/30,000 miles—or other restrictions.

              There also are several states with no disclosure or consent rules currently in place for collision repair.

              Protect your family and your vehicle investment, and know your rights <strong>BEFORE YOUR VEHICLE IS REPAIRED</strong>.

              Check with your local collision or auto body repair associations regarding the collision repair-related laws and regulations in your state—a quick Internet search should help you find them.



              </div>
            </div>



            <div className="insurance-fact">
              <div className="fact-header">

              The Right to a Safe, Properly Repaired Vehicle

              </div>
              <div className="fact-body">
              Everyone deserves to drive or ride in a safely repaired vehicle; one that will perform properly in the event of a subsequent collision. But don’t leave safety to chance.

              Ask questions about the parts that will be used, and how your car will be repaired. Ask about the technicians’ training and if the shop is “certified” or “recognized” within the collision repair community. You have rights, but rights must be exercised. Get involved in the repair of your vehicle.
              </div>
            </div>




          </div>
        </div>
      </div>
    );
  }
}

export default Insurance;