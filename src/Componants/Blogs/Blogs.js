import React from 'react';

const Blogs = () => {
    return (
        <div className='px-20 md:px-20 py-2 mx-auto max-w-7xl bg-slate-50'>
            <div className='py-2'>
                <h3 className='py-2 text-3xl font-bold'>What is Contex API?</h3>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. In a typical React application, data is passed top-down (parent to child) via props, This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier. Two basic web store apps, one built with the Context API and one without it.</p>
            </div>
            <div className='py-2'>
                <h3 className='py-2 text-3xl font-bold'>What is Semantic tags?</h3>
                <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language. prefer to have your code samples display in the default browser style</p>
            </div>

            <div className='py-2'>
                <h3 className='py-2 text-3xl font-bold '>Block and inline Block Element</h3>
                <p> Web browsers treat every element as a kind of box. brought a new way to create side by side boxes that collapse and wrap properly depending on the available space in the containing element.  However, CSS has two different types of boxes-block and inline. A block element always starts on a new line, and fills up the horizontal space left and right on the web page. display-block, a line break happens after the element, so a block element doesn’t sit next to other elements. Inline-block It makes layouts that were previously accomplished with floats easier to create. No need to clear floats anymore.</p>
            </div>

        </div>
    );
};

export default Blogs;