import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { categories } from "@/components/common/Header";


type CategoryModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (selectedCategories: string[], subcategories: string[]) => void;
};

export const CategoryModal = ({
  open,
  onClose,
  onSubmit,
}: CategoryModalProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );

  // Handle category click
  const handleCategoryClick = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  // Handle subcategory checkbox change
  const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
    if (checked) {
      setSelectedSubcategories((prev) => [...prev, subcategory]);
    } else {
      setSelectedSubcategories((prev) =>
        prev.filter((sub) => sub !== subcategory)
      );
    }
  };

  // Handle submit
  const handleSubmit = () => {
    onSubmit(selectedCategories, selectedSubcategories); // Submit data to parent
    onClose(); // Close modal after submission
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Categories and Subcategories</DialogTitle>
        </DialogHeader>

        {/* Category Cards */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
          {categories.map((category, index) => (
            <div key={index}>
              <div
                className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
                onClick={() =>
                  handleCategoryClick(
                    category.name,
                    !selectedCategories.includes(category.name)
                  )
                }
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="max-w-full"
                />
                <p className="font-medium text-sm text-center">
                  {category.name}
                </p>
                {/* Display checkmark if category is selected */}
                {selectedCategories.includes(category.name) && <span>✔️</span>}
              </div>

              {/* Display subcategories if category is selected */}
              {selectedCategories.includes(category.name) && (
                <div className="pl-4 space-y-2">
                  {category.subcategories.map((subcategory, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={subcategory.name}
                        onChange={(e) =>
                          handleSubcategoryChange(
                            subcategory.name,
                            e.target.checked
                          )
                        }
                      />
                      <label htmlFor={subcategory.name} className="text-sm">
                        {subcategory.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <DialogFooter className="flex justify-end pt-4">
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-primary text-white"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { categories } from "@/components/common/Header";
// type CategoryModalProps = {
//   open: boolean;
//   onClose: () => void;
//   onSubmit: (selectedCategories: string[], subcategories: string[]) => void;
// };

// export const CategoryModal = ({
//   open,
//   onClose,
//   onSubmit,
// }: CategoryModalProps) => {
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
//     []
//   );

//   const handleCategoryChange = (category: string, checked: boolean) => {
//     if (checked) {
//       setSelectedCategories((prev) => [...prev, category]);
//     } else {
//       setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
//     }
//   };

//   const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
//     if (checked) {
//       setSelectedSubcategories((prev) => [...prev, subcategory]);
//     } else {
//       setSelectedSubcategories((prev) =>
//         prev.filter((sub) => sub !== subcategory)
//       );
//     }
//   };

//   const handleSubmit = () => {
//     onSubmit(selectedCategories, selectedSubcategories);
//     onClose();
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Select Categories and Subcategoriess</DialogTitle>
//         </DialogHeader>

//         <div>
//           {categories.map((category, index) => (
//             <div key={index}>
//               <div>
//                 <input
//                   type="checkbox"
//                   onChange={(e) =>
//                     handleCategoryChange(category.name, e.target.checked)
//                   }
//                 />
//                 <label>{category.name}</label>
//               </div>

//               {category.subcategories.map((sub, subIndex) => (
//                 <div key={subIndex} className="pl-4">
//                   <input
//                     type="checkbox"
//                     onChange={(e) =>
//                       handleSubcategoryChange(sub.name, e.target.checked)
//                     }
//                     disabled={!selectedCategories.includes(category.name)}
//                   />
//                   <label>{sub.name}</label>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>

//         <DialogFooter>
//           <Button type="button" onClick={handleSubmit}>
//             Submit
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };
