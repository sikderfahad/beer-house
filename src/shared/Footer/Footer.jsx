const Footer = () => {
  return (
    <div>
      <hr className={"my-12"}></hr>
      <div className="pb-12">
        <p className="text-center text-lg font-medium text-[#878e99]">
          © {new Date().getFullYear()}. All rights reserved by Developer -
          Sajedul
        </p>
      </div>
    </div>
  );
};

export default Footer;
