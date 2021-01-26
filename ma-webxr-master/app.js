// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.6, -5);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// [10:57] Evert Olsthoorn
const cuberoom = new Model('../assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-0.115, 0.0, -6.459);
cuberoom.setScale(0.903, 0.838, 0.933);
cuberoom.setRotation(0, 3.381, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0.5, -5);

// create some text
const testText = new Text('Lisser Art Museum');
testText.setPosition(-6, 5, 0);
testText.setFontsize(10);

// create an image
const image = new XRImage('assets/images/Lisse-049.jpg');
image.setPosition(2, 2, -9);
image.setScale(4, 4, 4);
image.setRotation(0, -20, 0);

// create a second image
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(3, 3, -9);

// create a third image
const image3 = new XRImage('assets/images/sampleimage.jpg');
image3.setPosition(-1, 3, -9);

// create a fourth image
const image4 = new XRImage('assets/images/Lisse-051.jpg');
image4.setPosition(4.52, 3, -4);
image4.setRotation(0, -90, 0);

// create a fifth image
const image5 = new XRImage('assets/images/ijsjes.jpg');
image5.setPosition(-4.44, 1, -4);
image5.setRotation(0, 90, 0);

// create a floor page
const floorimage = new XRImage('assets/images/vloerafbeelding.jpg');
floorimage.setPosition(0.2, 0.0, 2);
floorimage.setScale(9, 9, 9);
floorimage.setRotation(90, 90, 90);

// create a exit page
const exitimage = new XRImage('assets/images/uitgangafbeelding.jpg');
exitimage.setPosition(0.2, 4.5, 6.5)
exitimage.setScale(9, 9, 9);
exitimage.setRotation(0, 180, 0);


// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

//spotlight
const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));