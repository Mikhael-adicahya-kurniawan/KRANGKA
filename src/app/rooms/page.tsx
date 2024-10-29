import React from 'react';
import Image from 'next/image';  // Import komponen Image dari Next.js

function Rooms() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 mt-16"> {/* Added mt-16 for spacing */}
                    Rooms
                </h2>
                <div className="flex flex-col space-y-8">
                    {/* Fasilitas 1 */}
                    <div className="w-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/fasilitas1.jpg"
                                alt="Facility 1"
                                width={1200} // Set width untuk optimalisasi
                                height={600} // Set height untuk optimalisasi
                                className="w-full h-96 object-cover"  // Tambahkan kelas sesuai kebutuhan
                            />
                            <div className="p-6 flex flex-col items-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Facility 1</h3>
                                {/* Hapus deskripsi */}
                            </div>
                        </div>
                    </div>

                    {/* Fasilitas 2 */}
                    <div className="w-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/fasilitas2.jpg"
                                alt="Facility 2"
                                width={1200}
                                height={600}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-6 flex flex-col items-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Facility 2</h3>
                                {/* Hapus deskripsi */}
                            </div>
                        </div>
                    </div>

                    {/* Fasilitas 3 */}
                    <div className="w-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/fasilitas3.jpg"
                                alt="Facility 3"
                                width={1200}
                                height={600}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-6 flex flex-col items-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Facility 3</h3>
                                {/* Hapus deskripsi */}
                            </div>
                        </div>
                    </div>

                    {/* Fasilitas 4 */}
                    <div className="w-full">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            <Image
                                src="/images/fasilitas1.jpg"
                                alt="Facility 4"
                                width={1200}
                                height={600}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-6 flex flex-col items-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Facility 4</h3>
                                {/* Hapus deskripsi */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rooms;
