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
testText.setPosition(10, 1, 0);
testText.setRotation(10, 270, 0);
testText.setFontsize(4);

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
image5.setPosition(-4.3, 3, 1);
image5.setScale(2, 2, 2);
image5.setRotation(0, 90, 0);

// create a floor image
const floorimage = new XRImage('assets/images/vloerafbeelding.jpg');
floorimage.setPosition(0.2, 0.0, 2);
floorimage.setScale(9, 9, 9);
floorimage.setRotation(90, 90, 90);

// create a wall image
const wallimage = new XRImage('assets/images/muur1.jpg');
wallimage.setPosition(-4.4, 4.2, 2.9);
wallimage.setScale(9, 9, 9);
wallimage.setRotation(0, 89.75, 0);

// create a exit image
const exitimage = new XRImage('assets/images/uitgangafbeelding.jpg');
exitimage.setPosition(0.2, 4.5, 6.4)
exitimage.setScale(9, 9, 9);
exitimage.setRotation(0, 180, 0);

// create a glass image
const glassimage = new XRImage('assets/images/Glass.png');
glassimage.setPosition(4.6, 4.5, 2)
glassimage.setScale(9, 9, 9);
glassimage.setRotation(0, 90, 0);

// create a sealing image
const plafondimage = new XRImage('assets/images/plafond.jpg');
plafondimage.setPosition(0, 6.7, 2.3)
plafondimage.setScale(9.5, 9.5, 9.5);
plafondimage.setRotation(-70, -180, -90);

// create LAMlogo
const logoimage = new XRImage('assets/images/LAMlogo.png');
logoimage.setPosition(-4.3, 4.5, 4);
logoimage.setScale(3, 3, 3);
logoimage.setRotation(0, 90, 0);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

//spotlight
const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));