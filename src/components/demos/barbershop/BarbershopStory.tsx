import React from 'react';
import toolsImg from '../../../assets/demos/barbershop/tools.webp';

export const BarbershopStory: React.FC = () => {
  return (
    <section id="story" className="bg-linea-white py-24 sm:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <h2 className="font-linea-display text-3xl sm:text-4xl md:text-5xl font-semibold text-linea-carbon leading-tight tracking-tight mb-8">
              Precision, without the fuss.
            </h2>

            <div className="space-y-6 font-linea-body text-base text-linea-slate leading-relaxed">
              <p>
                LINEA is built on one principle: every detail matters. We focus on clean execution, consistent results, and the kind of attention that turns a haircut into a craft. No gimmicks — just sharp work.
              </p>
              <p>
                Our barbers are trained to listen first, then cut. Whether it's a skin fade, a textured crop, or a full beard sculpt, the result should look as good on day seven as it does walking out.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="h-px w-12 bg-linea-copper"></div>
              <span className="font-linea-arabic text-sm text-linea-copper">إتقان في كل تفصيلة</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-sm">
              <img
                src={toolsImg}
                alt="LINEA barber tools"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
