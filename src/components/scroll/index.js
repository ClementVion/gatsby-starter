import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import LocomotiveScroll from "locomotive-scroll"

import "./index.scss"

const Scroll = ({ children }) => {

	// Scroll variables
	const refScroll = useRef(null);
	let scroll = null;

	// Init scroll
	useEffect(() => {
		scroll = new LocomotiveScroll({
			el: refScroll.current,
			smooth: true
		});
	})

	return (
		<>
			<div
				className="Scroll"
				ref={refScroll}
				data-scroll-container
				id="fixed-elements-target"
			>
				{children}
			</div>
		</>
	)
}

Scroll.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Scroll;