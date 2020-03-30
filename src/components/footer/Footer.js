import React from 'react';
import { COPY_RIGHT_DETAILS } from '../../appConstants/AppConstants';

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="footer-content">
					<br />
					&copy; {COPY_RIGHT_DETAILS}
				</div>
			</footer>
		</div>
	);
};

export default Footer;
