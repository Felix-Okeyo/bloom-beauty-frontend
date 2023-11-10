import React from 'react';

function Navbar({ selectedSection, handleSectionChange }) {
    return (
        <nav className="h-screen overflow-y-auto">
            <h2 className="font-semibold text-gray-600 uppercase tracking-wide">MailBoxes</h2>
            <div className="mt-3">
                <a
                    href="#"
                    onClick={() => handleSectionChange('products')}
                    className={`-mx-3 py-1 px-3 text-sm font-medium flex items-center justify-between ${selectedSection === 'products' ? 'bg-gray-200' : ''
                        } rounded-lg`}
                >
                    <span>
                        <i className="h-6 w-6 fa fa-envelope-o fill-current text-gray-700" aria-hidden="true"></i>
                        <span className="text-gray-900">Products</span>
                    </span>
                </a>
            </div>
            <div className="mt-3">
                <a
                    href="#"
                    onClick={() => handleSectionChange('clients')}
                    className={`-mx-3 py-1 px-3 text-sm font-medium flex items-center justify-between ${selectedSection === 'clients' ? 'bg-gray-200' : ''
                        } rounded-lg`}
                >
                    <span>
                        <i className="h-6 w-6 fa fa-flag-o fill-current text-gray-700" aria-hidden="true"></i>
                        <span className="text-gray-900">Clients</span>
                    </span>
                </a>
            </div>
            <div className="mt-3">
                <a
                    href="#"
                    onClick={() => handleSectionChange('orders')}
                    className={`-mx-3 py-1 px-3 text-sm font-medium flex items-center justify-between ${selectedSection === 'orders' ? 'bg-gray-200' : ''
                        } rounded-lg`}
                >
                    <span>
                        <i className="h-6 w-6 fa fa-pencil-square-o fill-current text-gray-700" aria-hidden="true"></i>
                        <span className="text-gray-900">Invoices</span>
                    </span>
                </a>
            </div>
            <div className="mt-3">
                <a
                    href="#"
                    onClick={() => handleSectionChange('accounts')}
                    className={`-mx-3 py-1 px-3 text-sm font-medium flex items-center justify-between ${selectedSection === 'accounts' ? 'bg-gray-200' : ''
                        } rounded-lg`}
                >
                    <span>
                        <i className="h-6 w-6 fa fa-pencil-square-o fill-current text-gray-700" aria-hidden="true"></i>
                        <span className="text-gray-900">Accounts</span>
                    </span>
                </a>
            </div>
            <div class="mt-8">
                <h2 class="font-semibold text-gray-600 uppercase tracking-wide">Analytics</h2>
                <div class="mt-3">
                    <a
                        href="#"
                        onClick={() => handleSectionChange('productsanalytics')}
                        className={`-mx-3 py-1 px-3 text-sm font-medium flex items-center justify-between ${selectedSection === 'productsanalytics' ? 'bg-gray-200' : ''
                            } rounded-lg`}
                    >
                        <span class=" text-gray-900">Products Analytics</span>
                    </a>
                </div>
                <div class="mt-3">
                <a
                        href="#"
                        onClick={() => handleSectionChange('invoicesanalytics')}
                        className={`-mx-3 py-1 px-3 text-sm font-medium flex items-center justify-between ${selectedSection === 'invoicesanalytics' ? 'bg-gray-200' : ''
                            } rounded-lg`}
                    >
                        <span class=" text-gray-900">Invoices Analytics</span>
                    </a>
                </div>
                <div class="mt-3">
                    <a href=""
                        class="-mx-3  py-1 px-3 text-sm font-medium flex items-center justify-between hover:bg-gray-200 rounded-lg">
                        <span class=" text-gray-900">Bugs</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;