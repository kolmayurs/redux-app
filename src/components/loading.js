import React from 'react';
import '../css/loading.css';

class loader extends React.Component{
	render(){
		return(
				/*<div className="windows8">
					<div className="wBall" id="wBall_1">
						<div className="wInnerBall"></div>
					</div>
					<div className="wBall" id="wBall_2">
						<div className="wInnerBall"></div>
					</div>
					<div className="wBall" id="wBall_3">
						<div className="wInnerBall"></div>
					</div>
					<div className="wBall" id="wBall_4">
						<div className="wInnerBall"></div>
					</div>
					<div className="wBall" id="wBall_5">
						<div className="wInnerBall"></div>
					</div>
				</div>*/
				<div className="wrap">
				  <div className="loading">
				    <div className="bounceball"></div>
				    <div className="text">NOW LOADING</div>
				  </div>
				</div>
			)
	}
}
export default loader;