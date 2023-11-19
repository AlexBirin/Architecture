
gsap.registerPlugin(Draggable);
gsap.registerPlugin(InertiaPlugin);

window.onload = function() {
	setTimeout(function() {

		document.body.classList.add('loaded')

		Draggable.create('.gallery' , {
			bounds: 'body',
			inertia: true
	})
})
 
}