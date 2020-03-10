import $ from 'jquery';
import video from '../../image/video/video.mp4'


export const login = () => {
    const loginPage = $(`
    <div id="login_page">
        <video autoplay muted loop id="vide">
          <source src="${video}">
        </video>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <form>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                    
                        <button id="login-btn"  class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
</div>
    `)
    return loginPage;
}