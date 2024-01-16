import aboutusImage from "../assets/aboutus.jpg";
const Aboutus = () => {
  return (
    <div className="my-4">
      <div
        className="hero min-h-fit my-4 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${aboutusImage})` }}
      >
        <div className="hero-overlay bg-opacity-80 brightness-50"></div>
        <div className="hero-content  text-neutral-content">
          <div className=" flex md:flex-row flex-col-reverse items-center justify-around">
            <div className="max-w-lg mt-4">
              <h1 className="font-Dancing font-bold">
                -----Lucky<span className="text-red-600">Auto-----</span>
              </h1>
              <h1 className="mb-5 text-5xl font-bold">About Us</h1>
              <p className="mb-5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                fringilla sapien. Quisque tristique ex sit amet urna tincidunt
                ullamcorper. Ut commodo, nisi eu facilisis suscipit, urna quam
                vestibulum lectus, eu fermentum ex quam vitae odio. Fusce eget
                tincidunt lectus. Maecenas vel metus at libero luctus cursus.
                Sed aliquam feugiat lorem vel tristique. Nullam in tortor non
                leo hendrerit tristique ut vitae elit. Proin a justo et urna
                euismod fringilla. Vivamus facilisis dolor a nibh congue, vel
                suscipit libero tincidunt. Nullam hendrerit justo vel augue
                eleifend, a aliquet mi lobortis. Curabitur id justo ut turpis
                volutpat gravida vel id felis. Sed vel tortor in elit tincidunt
                fermentum nec vel ipsum. Integer tincidunt mi ut orci tempus, at
                bibendum metus blandit. Praesent sed orci a justo fermentum
                bibendum. Maecenas efficitur efficitur mi, ut congue libero
                fringilla at. In hac habitasse platea dictumst. Sed at ante vel
                elit cursus efficitur in ut purus. Aliquam nec ultrices metus.
                Integer auctor felis vel dui aliquam, in suscipit justo
                fermentum. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Integer vel tortor
                id odio scelerisque mattis. Duis vel purus quam. Vestibulum
                volutpat malesuada elit, sit amet scelerisque nisl tristique id.
                Nam sed fringilla velit. Maecenas hendrerit tortor at turpis
                efficitur, at lobortis elit scelerisque. Ut bibendum ex id
                lectus malesuada, non posuere sapien tincidunt. Curabitur
                condimentum justo nec nisl volutpat, at fermentum tortor tempus.
              </p>
              <button className="btn btn-warning">Contact Us</button>
            </div>
            <div className="max-w-md md:ml-10">
              <img src={aboutusImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
