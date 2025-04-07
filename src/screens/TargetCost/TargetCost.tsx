import { ArrowLeftIcon, LightbulbIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { Slider } from "../../components/ui/slider";

export const TargetCost = (): JSX.Element => {
  // Campaign steps data
  const campaignSteps = [
    { id: 1, name: "Campaign creation", active: true, completed: true },
    { id: 2, name: "Review & Submit", active: false, completed: false },
    { id: 3, name: "Payment", active: false, completed: false },
    { id: 4, name: "Tracking & Conversions", active: false, completed: false },
  ];

  // Substeps data for campaign creation
  const subSteps = [
    { name: "Objectives", active: false, completed: true },
    { name: "Landing page", active: false, completed: true },
    { name: "Audiences", active: false, completed: true },
    { name: "Target cost", active: true, completed: false },
    { name: "Budget", active: false, completed: false },
    { name: "Ads", active: false, completed: false },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex h-[60px] items-center p-5 bg-[#1d4488]">
        <div className="relative w-[75.71px] h-5">
          <img
            className="absolute w-[69px] h-[18px] top-px left-px"
            alt="Logo"
            src="https://c.animaapp.com/m95yjv36nCAqI8/img/group.png"
          />
          <img
            className="absolute w-[3px] h-2 top-[9px] left-[72px]"
            alt="Vector"
            src="https://c.animaapp.com/m95yjv36nCAqI8/img/vector.svg"
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col w-[213px] h-full items-start justify-between p-6 bg-[#ffffff] border-r border-[#d4d9df]">
          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                {/* Main steps */}
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  {campaignSteps.map((step) => (
                    <div
                      key={step.id}
                      className="flex h-9 items-center gap-2 relative self-stretch w-full"
                    >
                      <Badge
                        variant={step.active ? "default" : "outline"}
                        className={`flex-none w-6 h-6 rounded-full p-0 flex items-center justify-center ${
                          step.active
                            ? "bg-blue border-[#4d86ec]"
                            : "bg-transparent border-[#667686]"
                        }`}
                      >
                        <span
                          className={`text-xs ${step.active ? "text-white" : "text-gray-7"}`}
                        >
                          {step.id}
                        </span>
                      </Badge>
                      <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                        <div
                          className={`relative w-fit [font-family:'Roboto',Helvetica] ${
                            step.active
                              ? "font-medium text-gray-9"
                              : "font-normal text-gray-7"
                          } text-sm tracking-[0] leading-[18px] whitespace-nowrap`}
                        >
                          {step.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Substeps */}
                <div className="flex flex-col items-start relative self-stretch w-full">
                  {subSteps.map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="flex h-6 items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full">
                        <div
                          className={`relative self-stretch w-0.5 ${
                            step.active
                              ? "bg-blue"
                              : step.completed
                                ? "bg-gray-8"
                                : "bg-gray-6"
                          }`}
                        />
                      </div>
                      <div className="inline-flex h-2 items-center gap-2 pl-[5px] pr-0 py-0 relative">
                        <div className="flex flex-col w-3.5 h-3.5 items-center justify-center gap-2.5 relative mt-[-3.00px] mb-[-3.00px] rounded-[20px]">
                          <div
                            className={`relative w-2 h-2 ${
                              step.active
                                ? "bg-blue"
                                : step.completed
                                  ? "bg-gray-8"
                                  : "bg-gray-6"
                            } rounded`}
                          />
                        </div>
                        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
                          <div
                            className={`relative w-[77px] h-3.5 mt-[-1.00px] [font-family:'Roboto',Helvetica] ${
                              step.active
                                ? "font-bold text-blue"
                                : step.completed
                                  ? "font-normal text-gray-8"
                                  : "font-normal text-gray-6"
                            } text-sm tracking-[0] leading-[14px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]`}
                          >
                            {step.name}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  <div className="flex h-6 items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full">
                    <div className="bg-gray-6 relative self-stretch w-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tip card */}
          <Card className="flex h-10 items-center justify-center gap-2 p-4 relative self-stretch w-full rounded-md border-[1.5px] border-[#8051e3] bg-white">
            <CardContent className="flex items-center p-0">
              <LightbulbIcon className="w-6 h-6 text-[#8051e3]" />
              <div className="flex items-center justify-center gap-2.5 relative flex-1 grow">
                <div className="relative flex-1 [font-family:'Roboto',Helvetica] font-normal text-gray-9 text-base tracking-[0] leading-6">
                  <span className="font-medium text-[#212832]">Tip: </span>
                  <span className="text-[#4b545f]">Conversion rules</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto flex">
          <div className="flex-1 p-8 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-10 max-w-[646px]">
              <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="font-bold text-[28px] leading-[28px] text-gray-9">
                  What is your target cost per click (CPC)?
                </h1>
                <p className="text-gray-7 text-xl">
                  This information will help us recommend the best budget
                  for your goals.
                </p>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex w-[225px] h-10 items-center gap-2 pl-[9px] pr-2 py-0 relative rounded-md border border-solid border-[#b8c1ca]">
                  <div className="flex items-center gap-2 relative flex-1 grow">
                    <div className="relative w-fit font-14-regular text-gray-8 whitespace-nowrap">
                      USD
                    </div>
                    <Separator
                      orientation="vertical"
                      className="h-10 bg-[#b8c1ca]"
                    />
                    <Input
                      className="border-0 h-[18px] p-0 font-14-regular text-gray-8"
                      defaultValue="0$"
                    />
                  </div>
                </div>
              </div>

              {/* CPA Tolerance section */}
              <div className="flex flex-col w-[226px] items-start gap-3 relative">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-gray-8 text-sm tracking-[0] leading-[14px]">
                  <span className="text-[#4b545f] leading-[18px]">
                    CPA tolerance:{" "}
                  </span>
                  <span className="font-[number:var(--16-bold-font-weight)] text-[#4b545f] text-[length:var(--16-bold-font-size)] leading-[var(--16-bold-line-height)] font-16-bold [font-style:var(--16-bold-font-style)] tracking-[var(--16-bold-letter-spacing)]">
                    20%
                  </span>
                </div>

                <div className="relative w-[226px] h-4">
                  <Slider
                    defaultValue={[20]}
                    max={100}
                    step={1}
                    className="absolute w-[226px] h-1 top-[5px] left-0"
                  />
                  <div className="absolute w-4 h-4 top-0 left-[41px] bg-[#ffffff] rounded-lg border border-solid border-[#b8c1ca]" />
                </div>

                <div className="relative self-stretch font-12-regular font-[number:var(--12-regular-font-weight)] text-gray-7 text-[length:var(--12-regular-font-size)] tracking-[var(--12-regular-letter-spacing)] leading-[var(--12-regular-line-height)] [font-style:var(--12-regular-font-style)]">
                  CPA range: $40.00 - $60.00
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="absolute bottom-0 left-[213px] right-[430px] h-[71px] bg-white border-t border-[#d4d9df]">
            <div className="flex justify-between items-center px-4 py-4 w-full">
              <Button
                variant="ghost"
                className="flex items-center gap-0.5 text-gray-7"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="font-medium text-sm tracking-[0.50px]">
                  Back
                </span>
              </Button>

              <Button className="bg-blue text-white">
                <span className="font-medium text-sm tracking-[0.50px]">
                  Next
                </span>
              </Button>
            </div>
          </footer>
        </div>

        {/* Right illustration panel */}
        <div className="w-[430px] bg-light-blue border-l border-[#d4d9df] flex items-center justify-center">
          <img
            className="w-full h-auto"
            alt="Campaign illustration"
            src="https://c.animaapp.com/m95yjv36nCAqI8/img/layer-1.png"
          />
        </div>
      </div>
    </div>
  );
};
