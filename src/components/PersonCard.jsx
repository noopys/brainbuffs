import React from 'react';

function PersonCard({ name, role, description, imageSrc }) {
  return (
    <div className="w-full lg:w-[769.1px] xl:w-[736.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[0.810546875px] px-0 pb-0 box-border gap-[42px] lg:flex-col lg:items-center">
      <img
        className="flex-1 relative max-w-full overflow-hidden h-[294px] object-cover"
        alt={name}
        src={imageSrc}
      />
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch h-[62px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[8px]">
          <div className="relative rounded-lg bg-teal-500 w-[3px] h-[62px]" />
          <div className="relative tracking-[0.12px] leading-[31.2px] font-medium flex items-center w-[300.4px] h-[60.2px] shrink-0">
            <span className="w-full">
              <p className="m-0">{name}</p>
              <p className="m-0 text-darkslategray-100">
                {role}
              </p>
            </span>
          </div>
        </div>
        <div className="self-stretch relative text-lg tracking-[0.18px] leading-[24.3px] text-darkslategray-100">
          {description}
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
