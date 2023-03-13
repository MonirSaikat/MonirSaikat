import { SectionTitle } from "components/shared/SectionTitle";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdCodeWorking } from 'react-icons/io';

const Experience = () => {
    const color = 'rgba(14, 165, 233)';

    return (
        <div className="my-5 pt-5">
            <SectionTitle>Experience</SectionTitle>

            <VerticalTimeline lineColor={color}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: color, color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid skyblue' }}
                    date="March 2023 - present"
                    dateClassName="text-gray-100 md:text-sky-500 "
                    iconStyle={{ background: color, color: '#fff' }}
                    icon={<IoMdCodeWorking />}
                >
                    <h3 className="vertical-timeline-element-title">Fullstack Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm">On-site, ITDealBD, Rangpur.</h4>
                    <p>
                        Solving existing problems on in-house projects and creating new products with php and laravel. SMS gateway, Payment gateway and others API integreation. 
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work "
                    contentStyle={{ background: color, color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid skyblue' }}
                    date="Aug 2022 - Jan 2023"
                    dateClassName="text-gray-100 md:text-sky-500"
                    iconStyle={{ background: color, color: '#fff' }}
                    icon={<IoMdCodeWorking />}
                >
                    <h3 className="vertical-timeline-element-title">Junior Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-sm">Remote, DirectSoft.</h4>
                    <p>
                        Junior web developer focused on frontend using react.js and TypeScript
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;