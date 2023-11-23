import React from 'react'
import { Container } from 'reactstrap'

export default function Copyright() {
    return (
        <Container>
            <div className="copyright">
                <p> &copy; ThemeTags Design Agency, All rights reserved</p>
                <ul>
                    <li><a href="javascript:;">Terms</a></li>
                    <li><a href="javascript:;">Security</a></li>
                    <li><a href="javascript:;">Privacy Policy</a></li>
                </ul>
            </div>
        </Container>
    )
}
