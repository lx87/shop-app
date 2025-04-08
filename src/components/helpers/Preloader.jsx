const Preloader = () => {
    return (
        <div className="container-fluid d-flex p-0 m-0 align-items-center justify-content-center">
            <div className='spinner-border spinner-custom not-found text-white' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
  };
  
  export default Preloader;
  