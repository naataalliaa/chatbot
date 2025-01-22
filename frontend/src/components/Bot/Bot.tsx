import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const Bot: React.FC = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: useCallback((acceptedFiles: Array<File>) => {
      const file = new FileReader();
      file.onload = function () {
        setPreview(file.result);
      };
      file.readAsDataURL(acceptedFiles[0]);
    }, [])
  });

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (typeof acceptedFiles[0] === 'undefined') return;

    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    formData.append('upload_preset', '<Your Upload Preset>');
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

    const results = await fetch('https://api.cloudinary.com/v1_1/<Your Cloud Name>/image/upload', {
      method: 'POST',
      body: formData
    }).then((r) => r.json());

    console.log('results', results);
  }

  return (
    
      <div className="flex flex-col items-center space-y-6">
        <img src="/bot1.png" alt="Bot Face" className="w-57 h-55 px-10 py-10" />
    

      <div className="text-center mt-25">
       
        <form className="max-w-md border border-gray-200 rounded p-5 mx-100" onSubmit={handleOnSubmit}>
         
          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <input
              id="message"
              name="message"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-5">
  <label
    htmlFor="image"
    className="block text-sm font-medium text-gray-900 cursor-pointer"
  >
  </label>
  <div
    {...getRootProps({ className: 'mt-2 cursor-pointer border-2 border-dashed p-4 rounded-lg text-center' })}
  >
    <input {...getInputProps()} />
    {isDragActive ? (
      <p className="text-blue-500">Drop the files here ...</p>
    ) : (
      <p className="text-gray-900">Drag 'n' drop some files here, or click to select files</p>
    )}
  </div>
</div>

          {preview && (
            <div className="mb-5">
              <img src={preview as string} alt="Upload preview" className="max-w-full h-auto" />
            </div>
          )}

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Bot;
