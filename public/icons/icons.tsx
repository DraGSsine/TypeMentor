import { IconTypes } from "@/app/types/types.ts";

export const UserLogo = (props: IconTypes) => {
  return (
    <svg
	  className={props.className || ""}
      fill={props.fill || "none"}
      widths={props.width || "42px"}
      height={props.height || "42px"}
      stroke={props.fill || "white"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};

export const RestartIcon = (props: IconTypes) => {
  return (
    <svg
	  className={props.className || ""}
      fill={props.fill || "#5074FF"}
      widths={props.width || "25px"}
      height={props.height || "25px"}
      stroke={props.fill || "#5074FF"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M 25 2 A 2.0002 2.0002 0 1 0 25 6 C 35.517124 6 44 14.482876 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 19.524201 8.3080175 14.608106 12 11.144531 L 12 15 A 2.0002 2.0002 0 1 0 16 15 L 16 4 L 5 4 A 2.0002 2.0002 0 1 0 5 8 L 9.5253906 8 C 4.9067015 12.20948 2 18.272325 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 C 48 12.321124 37.678876 2 25 2 z" />
    </svg>
  );
};
