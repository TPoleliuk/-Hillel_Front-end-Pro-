import './signUp.scss';
import Component from "@/plugins/component";

export default class SignUp extends Component{
    render() {
        return `
            <div class="container">
                <div class="form-box">
                    <h2>Sign Up</h2>
                    <form action="#" method="post" target="_blank">
                        <label for="username">USER NAME</label>
                        <input type="text" name="username" id="username" required>

                        <label for="phone">PHONE NUMBER</label>
                        <input type="tel" name="phone" id="phone">

                        <label for="email">E-MAIL</label>
                        <input type="email" name="email" id="email" required>

                        <label for="password">PASSWORD</label>
                        <input type="password" name="password" id="password" required>

                        <label for="confirm-password">CONFIRM PASSWORD</label>
                        <input type="password" name="confirm-password" id="confirm-password" required>

                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>`;
    };
};