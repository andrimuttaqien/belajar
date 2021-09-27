const e = React.createElement;

const LikeButton = () => {
    // Display a "Like" <button>
    return e(
        'button',
        // { onClick: () => this.setState({ liked: true }) },
        { onClick:()=>alert('Like Button') },
        'Like'
    );
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);