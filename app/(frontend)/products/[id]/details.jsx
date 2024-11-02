import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";

const TabDetails = () => {
  return (
    <Tabs defaultValue="desc" className="w-full border rounded-t-[3px] text-[14px]">
      <TabsList className="border-b gap-x-[10px] px-[15px] ">
        <TabsTrigger className="data-[state=active]:text-black py-[10px]" value="desc">
          Description
        </TabsTrigger>
        <TabsTrigger className="data-[state=active]:text-black py-[10px]" value="specs" asChild>
          <button>Specifications</button>
        </TabsTrigger>
        <TabsTrigger className="data-[state=active]:text-black py-[10px]" value="fts" asChild>
          <button>Key Features</button>
        </TabsTrigger>
      </TabsList>
      <TabsContent className="p-[15px]" value="desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, qui libero temporibus sint rem ducimus quibusdam vero dolorem autem laborum
        alias repellat et fuga laudantium tempora possimus explicabo, deserunt totam eius eaque, magni beatae consectetur. Maxime dolorum dicta
        ratione nulla?
      </TabsContent>

      <TabsContent className="p-[15px]" value="specs">
        <ul className="space-y-2">
          <li>
            <span className="font-medium">SKU</span>: VA421ST3REWKYNAFAMZ
          </li>
          <li>
            <span className="font-medium">Product Line</span>: nellies beauty gallery
          </li>
          <li>
            <span className="font-medium">Production Country</span>: UK
          </li>
          <li>
            <span className="font-medium">Weight (kg)</span>: 0.1
          </li>
          <li>
            <span className="font-medium">Color</span>: brown
          </li>
          <li>
            <span className="font-medium">Shop Type</span>: Jumia Mall
          </li>
        </ul>
      </TabsContent>
      <TabsContent className="p-[15px]" value="fts">
        <ul className="list-disc list-inside">
          <li>Body moisturizer locks in moisture to help revitalize dry and dull-looking skin</li>
          <li>Heals dry skin for glowing radiance with non-greasy, rich moisturization</li>
          <li>Contains pure cocoa butter to moisturize dry skin and promote a natural glow</li>
          <li>Body oil contains microdroplets of Vaseline Jelly to lock in moisture</li>
          <li>Daily body lotion best for: dry skin, dull skin</li>
        </ul>
      </TabsContent>
    </Tabs>
  );
};

export default TabDetails;
