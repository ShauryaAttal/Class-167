AFRAME.registerComponent("play-on-click", {
 schema:{
    isPlaying:{type:"boolean", default:false}
 },

 init: function(){
    this.video1= this.element.getAttribute("material").src
    this.onClick=this.onClick.bind(this)
 },

 play: function(){
   window.addEventListener("click",this.onClick) 
 },

 onClick: function(e){
    if(!this.video1){
        return
    }

    var isPlaying=this.el.getAttribute("play-on-click").isPlaying
    this.el.Object3D.visible=true   
    if(!isPlaying){
        this.el.setAttribute("play-on-click", {
            isPlaying:true
        })
        this.video1.play()
    }
    else{
        this.el.setAttribute("play-on-click", {
            isPlaying:false
        })
        this.video1.pause()
    }
 },
  
});
