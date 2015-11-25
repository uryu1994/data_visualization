/**
 * @author uryu1994
 */

/**
 * [VideoObject description]
 * @param {[type]} path [description]
 */
function VideoObject(path) {
    CubeObject.call(this, path);
    this.video = document.createElement('video');
    this.video.src = 'movie/'+path;
    this.video.load();
    this.video.play();

    this.texture = new THREE.VideoTexture(this.video);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.magFilter = THREE.LinearFilter;
    this.material = new THREE.MeshPhongMaterial(
        { map: this.texture }
    );

    this.obj = new THREE.Mesh(this.geometry, this.material);
}

VideoObject.prototype = new CubeObject();
