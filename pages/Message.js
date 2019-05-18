export default (state) => `<div id="profile" style="background-image: url(${state.images.profile})"></div>

${state.squares}

<div class='contact-form'>

    <div class='container form'>

        <form action="https://formspree.io/free4m@gmail.com" method="POST">

            <div class="flex flex--end">
                <span>
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="userName" required />
                </span>

                <span>
                    <label for="userEmail">Your Email:</label>
                    <input type="email" name="userEmail" id="userEmail" placeholder="user@example.com" required />
                </span>

                <span>
                    <label for="phone">Your Phone:</label>
                    <input type="tel" name="userPhone" id="phone">
                </span>
            </div>

            <div class="flex flex--column">
                <label for="message">Your Message:</label>
                <textarea name="message" id="message" rows="8" required></textarea>
            </div>

            <div class="flex flex--evenly">
                <p>What is it about: </p>
                <span>
                    <input type="radio" name="subject" value="professional" id="pro" checked="checked">
                    <label for="pro">Project or job</label>
                </span>

                <span>
                    <input type="radio" name="subject" value="other">
                    <label for="other">Something else</label>
                </span>
            </div>
            <div class="flex flex--evenly">
                <p>How did you hear about me?</p>
                <select name="marketing" id="marketing">
                    <optgroup label="Online">
                        <option value="social">Social Media</option>
                        <option value="github">Online Porfolio (GitHub)</option>
                        <option value="search">Search Engine</option>
                        <option value="email">Email</option>
                    </optgroup>
                    <optgroup label="In-Person">
                        <option value="networking">We met at a networking event</option>
                        <option value="referral">Personal referral</option>
                        <option value="randon">Something else</option>
                    </optgroup>
                    <option value="other">Other</option>
                </select>
            </div>
            <p class="submit-reset">
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </p>
        </form>

    </div>
</div>
`;